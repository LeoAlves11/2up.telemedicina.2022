<?php

namespace App\Models\Usuarios;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicos extends Model
{
    use HasFactory;

    protected $table = "medicos";

    protected $fillable = [
        'id_usuario',
        'id_especialidade',
        'crm_crn',
        'uf',
    ];
}
