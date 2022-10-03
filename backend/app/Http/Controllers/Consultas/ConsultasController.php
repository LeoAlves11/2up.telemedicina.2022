<?php

namespace App\Http\Controllers\Consultas;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use \Pusher\Pusher;
use Auth;

class ConsultasController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['Autenticar']]);
    }

    
}
