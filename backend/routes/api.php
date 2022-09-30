<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login', 'App\Http\Controllers\Auth\AuthController@login');
Route::post('registrar', 'App\Http\Controllers\Auth\AuthController@registrar');

Route::group(['middleware' => 'api'], function(){

Route::post('logout', 'App\Http\Controllers\Auth\AuthController@logout');
Route::post('refresh', 'App\Http\Controllers\Auth\AuthController@refresh');

//Prefixo não funcionando na API Routes
Route::post('paciente/get-paciente', 'App\Http\Controllers\Pacientes\PacientesController@getPaciente');
Route::post('paciente/dados-completos/{id}', 'App\Http\Controllers\Pacientes\PacientesController@verificarDados')->name('paciente.dados-completo');

});
