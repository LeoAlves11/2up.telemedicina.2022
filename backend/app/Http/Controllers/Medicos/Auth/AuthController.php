<?php

namespace App\Http\Controllers\Medicos\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//Import Models
use App\Models\Usuarios;

//Imports Uteis
use \Pusher\Pusher;
use Hash;
use Crypt;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'registrar', 'Autenticar']]);
    }

    //Login via JWT
    public function login(Request $request)
    {
        $email = $request->email;
        $senha = $request->password;
        
        if($email == null){
            return response()->json([
                "mensagem" => "Você precisa inserir um e-mail válido.",
                "status" => 'Falha',
                "codigo_erro" => '7001'
            ], 401);
        }
        
        if($senha == null){
            return response()->json([
                "mensagem" => "Você precisa inserir a sua senha.",
                "status" => 'Falha',
                "codigo_erro" => '7002'
            ], 401);
        }

        $verificar_medico = Usuarios::where('email', $email)->first();

        if(!$verificar_medico){
            return response()->json([
                "mensagem" => "Não encontramos esse e-mail em nosso sistema, deseja ",
                "status" => 'Falha',
                "codigo_erro" => '7003'
            ], 422);
        }

        if($verificar_medico->conta_ativa == 0){
            return response()->json([
                "mensagem" => "Parece que sua conta está desativada, deseja ",
                "status" => 'Falha',
                "codigo_erro" => '7004',
                "email_temporario" => $verificar_medico->email,
                "cpf_temporario" => $verificar_medico->crm_crn,
                "cel_temporario" => $verificar_medico->celular,
                "token_temporario" => Crypt::encrypt($verificar_medico->crm_crn.$verificar_medico->email),
            ], 422);
        }

        $verificar_senha = Hash::check($senha, $verificar_medico->password);

        if(!$verificar_senha){
            return response()->json([
                "mensagem" => 'Senha incorreta.',
                "status" => 'Falha',
                "codigo_erro" => '7005',
            ], 422);
        }

        if($verificar_medico->tipo_conta == 2)
        {
            $credentials = request(['email', 'password']);

            if (! $token = auth()->attempt($credentials)) {
                return response()->json([
                    "mensagem" => "E-mail ou senha incorretos.",
                    "status" => 'Falha',
                    "codigo_erro" => '7006'
                ], 401);
            }

            return $this->respondWithToken($token);
        }else{
            return response()->json([
                "mensagem" => 'Este e-mail está vinculado a um(a) paciente, contate o suporte!',
                "status" => 'Falha',
                "codigo_erro" => '7007',
            ], 422);
        }
    }

    public function registrar(Request $request)
    {
        try{
            
            if($request->confirmar_senha == $request->senha)
            {
                if($request->crm_crn == null)
                {
                    return response()->json([
                        "mensagem" => "Você precisa inserir um CRM/CRN válido.",
                        "status" => 'Falha',
                        "codigo_erro" => '1003'
                    ], 422);
                }else if($request->nome == null)
                {
                    return response()->json([
                        "mensagem" => "Você precisa nos informar o seu nome.",
                        "status" => 'Falha',
                        "codigo_erro" => '1007'
                    ], 422);
                }else if($request->sobrenome == null)
                {
                    return response()->json([
                        "mensagem" => "Você precisa nos informar o seu sobrenome.",
                        "status" => 'Falha',
                        "codigo_erro" => '1008'
                    ], 422);
                }else if($request->email == null)
                {
                    return response()->json([
                        "mensagem" => "Você precisa nos informar o seu e-mail.",
                        "status" => 'Falha',
                        "codigo_erro" => '1004'
                    ], 422);
                }else if($request->celular == null)
                {
                    return response()->json([
                        "mensagem" => "Você precisa nos informar o seu celular.",
                        "status" => 'Falha',
                        "codigo_erro" => '1005'
                    ], 422);
                }else if($request->dt_nascimento == null)
                {
                    return response()->json([
                        "mensagem" => "Você precisa nos informar a sua data de nascimento.",
                        "status" => 'Falha',
                        "codigo_erro" => '1009'
                    ], 422);
                }else if($request->senha == null)
                {
                    return response()->json([
                        "mensagem" => "Você precisa inserir uma senha.",
                        "status" => 'Falha',
                        "codigo_erro" => '1006'
                    ], 422);
                }else if(Usuarios::where('email', $request->email)->first()){
                    return response()->json([
                        "mensagem" => "Este e-mail já está cadastrado",
                        "status" => 'Falha',
                        "codigo_erro" => '1001'
                    ], 422);
                }else if(Usuarios::where('cpf', $request->cpf)->first()){
                    return response()->json([
                        "mensagem" => "Este CPF já está cadastrado",
                        "status" => 'Falha',
                        "codigo_erro" => '1010'
                    ], 422);
                }else{

                    $paciente = new Usuarios;

                    $paciente->cpf                       = $request->cpf;
                    $paciente->conta_ativa               = 0;
                    $paciente->password                  = Hash::make($request->senha);
                    $paciente->email                     = $request->email;
                    $paciente->nome                      = $request->nome;
                    $paciente->sobrenome                 = $request->sobrenome;
                    $paciente->sexo                      = $request->sexo;
                    $paciente->dt_nascimento             = date('Y-m-d', strtotime($request->dt_nascimento));
                    $paciente->celular                   = $request->celular;

                    $paciente->save();

                    return response()->json([
                        'mensagem' => 'Usuário cadastrado com sucesso. Faça o seu login.'
                    ], 200);
                }   
            }else{
                return response()->json([
                    "mensagem" => "As senhas precisam ser iguais.",
                    "status" => 'Falha',
                    "codigo_erro" => '1002'
                ], 422);
            }
            
        }
        catch(\Exception $erro)
        {
            return response()->json([
                $erro
            ], 500);
        }
    }

    //Logout via JWT
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    //Refresh token via JWT
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    //Return do JWT
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'paciente' => auth()->user()
        ]);
    }
}
