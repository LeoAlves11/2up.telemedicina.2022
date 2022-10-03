<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsuariosCrm extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('usuarios', function (Blueprint $table) {
            $table->string('crm_crn')->after('cpf')->nullable();
            $table->string('tipo_conta')->after('id'); // 1 - Pacientes / 2 - Medicos
            $table->string('estado')->after('sexo')->nullable();
            $table->string('cidade')->after('estado')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('usuarios', function (Blueprint $table) {
            $table->dropColumn('crm_crn');
            $table->dropColumn('tipo_conta');
            $table->dropColumn('estado');
            $table->dropColumn('cidade');
        });
    }
}
