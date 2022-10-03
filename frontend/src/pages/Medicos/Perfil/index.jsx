import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import './PerfilMedico.css'
import * as BiIcons from 'react-icons/bi'
import AuthMedicos from '../../../services/AuthMedicos'

function Perfil(perfil) {

    const {logout, token} = AuthMedicos();

    const logoutMedico = () => {
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
                        <p>Nome: {perfil.medico.nome} {perfil.medico.sobrenome}</p>
                        <p>CPF: {perfil.medico.crm_crn}</p>
                        <p>Telefone: {perfil.medico.celular}</p>
                    </div>
                    <div className="col-12 text-center">
                        <Button onClick={logoutMedico}>
                            Sair
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfil
