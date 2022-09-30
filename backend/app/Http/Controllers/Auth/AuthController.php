<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Hash;
use Crypt;

//Models
use App\Models\Pacientes;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'registrar']]);
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
                "codigo_erro" => '5002'
            ], 401);
        }
        
        if($senha == null){
            return response()->json([
                "mensagem" => "Você precisa inserir a sua senha.",
                "status" => 'Falha',
                "codigo_erro" => '5003'
            ], 401);
        }

        $verificar_paciente = Pacientes::where('email', $email)->first();

        if(!$verificar_paciente){
            return response()->json([
                "mensagem" => "Não encontramos esse e-mail em nosso sistema, deseja ",
                "status" => 'Falha',
                "codigo_erro" => '5004'
            ], 422);
        }

        if($verificar_paciente->conta_ativa == 0){
            return response()->json([
                "mensagem" => "Parece que sua conta está desativada, deseja ",
                "status" => 'Falha',
                "codigo_erro" => '5005',
                "email_temporario" => $verificar_paciente->email,
                "cpf_temporario" => $verificar_paciente->cpf,
                "cel_temporario" => $verificar_paciente->celular,
                "token_temporario" => Crypt::encrypt($verificar_paciente->cpf.$verificar_cpf->email),
            ], 422);
        }

        $verificar_senha = Hash::check($senha, $verificar_paciente->password);

        if(!$verificar_senha){
            return response()->json([
                "mensagem" => 'Senha incorreta.',
                "status" => 'Falha',
                "codigo_erro" => '5006',
            ], 422);
        }

        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json([
                "mensagem" => "CPF ou senha incorretos.",
                "status" => 'Falha',
                "codigo_erro" => '5001'
            ], 401);
        }

        return $this->respondWithToken($token);
    }

    public function registrar(Request $request)
    {
        try{
            
            if($request->confirmar_senha == $request->senha)
            {
                if($request->cpf == null)
                {
                    return response()->json([
                        "mensagem" => "Você precisa inserir um CPF válido.",
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
                }else if(Pacientes::where('email', $request->email)->first()){
                    return response()->json([
                        "mensagem" => "Este e-mail já está cadastrado",
                        "status" => 'Falha',
                        "codigo_erro" => '1001'
                    ], 422);
                }else{

                    $paciente = new Pacientes;

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
