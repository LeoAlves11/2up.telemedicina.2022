<?php

namespace App\Http\Controllers\Medicos;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//Import de Models
use App\Models\Usuarios;

//Imports uteis
use Auth;

class MedicosController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    //Get Usuario via JWT
    public function getMedicos()
    {
        return response()->json(auth()->user());
    }

    public function verificarDados($id)
    {
        $medico = Usuarios::where('tipo_conta', 2)->first();

        if(!$medico)
        {
            return response()->json([
                "mensagem" => "Médico não encontrado.",
                "status" => 'Falha',
                "codigo_erro" => '3001'
            ], 422);
        }

        if($medico->sexo == null)
        {
            return response()->json([
                "mensagem" => "Médico não completou os dados cadastrais.",
                "status" => 'Falha',
                "codigo_erro" => '3002'
            ], 201);
        }
    }
}
