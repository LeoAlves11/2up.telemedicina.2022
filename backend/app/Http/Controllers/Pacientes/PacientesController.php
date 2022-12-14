<?php

namespace App\Http\Controllers\Pacientes;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//Import de Models
use App\Models\Usuarios;

//Imports uteis
use Auth;

class PacientesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    //Get Usuario via JWT
    public function getPaciente()
    {
        return response()->json(auth()->user());
    }

    public function verificarDados($id)
    {
        $paciente = Usuarios::where('tipo_conta', 1)->first();

        if(!$paciente)
        {
            return response()->json([
                "mensagem" => "Paciente não encontrado.",
                "status" => 'Falha',
                "codigo_erro" => '2101'
            ], 422);
        }

        if($paciente->sexo == null)
        {
            return response()->json([
                "mensagem" => "Paciente não completou os dados cadastrais.",
                "status" => 'Falha',
                "codigo_erro" => '2102'
            ], 201);
        }
    }
}
