import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import './Perfil.css'
import * as BiIcons from 'react-icons/bi'
import AuthPaciente from '../../../services/AuthPaciente'

function Perfil(perfil) {

    const {logout, token} = AuthPaciente();

    const logoutPaciente = () => {
        if(token !== undefined)
        {
            logout();
        }
    }

    return (
        <>
            <div className="container divBGPerfil">
                <div className="row divPerfilTop">
                    <div className="col-12 text-center">
                        <BiIcons.BiUser className="iconePerfil"/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-12 text-center">
                        <p>Nome: {perfil.paciente.nome} {perfil.paciente.sobrenome}</p>
                        <p>CPF: {perfil.paciente.cpf}</p>
                        <p>Telefone: {perfil.paciente.celular}</p>
                    </div>
                    <div className="col-12 text-center">
                        <Button onClick={logoutPaciente}>
                            Sair
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfil
