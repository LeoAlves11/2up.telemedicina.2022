<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgendasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agenda', function (Blueprint $table) {
            $table->id();

            // ID do usuário a fazer a consulta
            $table->bigInteger('id_usuario')->unsigned();
            $table->foreign('id_usuario')
                  ->references('id')
                  ->on('usuarios');

            // ID do médico a fazer a consulta
            $table->bigInteger('id_medico')->unsigned();
            $table->foreign('id_medico')
                  ->references('id')
                  ->on('medicos');

            // Data e hora da consulta
            $table->string('horario_marcado')->nullable();
            $table->date('data_marcada')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agenda');
    }
}
