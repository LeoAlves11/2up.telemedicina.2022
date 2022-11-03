<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicos', function (Blueprint $table) {
            $table->id();

            // Usuario vinculado
            $table->bigInteger('id_usuario')->unsigned();
            $table->foreign('id_usuario')
                  ->references('id')
                  ->on('usuarios');

            // Especialidades
            $table->bigInteger('id_especialidade')->unsigned();
            $table->foreign('id_especialidade')
                  ->references('id')
                  ->on('especialidades');
            
            //Dados Medico
            $table->string('crm_crn')->nullable()->unique();
            $table->string('uf')->nullable();

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
        Schema::dropIfExists('medicos');
    }
}
