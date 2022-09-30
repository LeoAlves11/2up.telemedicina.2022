<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePacientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pacientes', function (Blueprint $table) {
            $table->id();

            //Dados pessoais
            $table->string('nome');
            $table->integer('conta_ativa')->unsigned();
            $table->string('email')->unique();
            $table->string('cpf')->unique();
            $table->string('celular');
            $table->string('password');
            $table->date('dt_nascimento');
            
            //Verificação de conta
            $table->timestamp('email_verified_at')->nullable();

            //RememberToken
            $table->rememberToken();
            
            //Timestamps
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pacientes');
    }
}
