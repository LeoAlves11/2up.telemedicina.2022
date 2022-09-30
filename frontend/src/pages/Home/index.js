import React, { useState, useEffect } from 'react'
import Badge from 'react-bootstrap/Badge'
import AuthPaciente from '../../services/AuthPaciente'
import './Home.css'

export default Home => {

    return (
        <React.Fragment>
            <div className="container divContent">
                <p className="pNomePaciente">
                    Ola, <span key={Home.paciente.id}><strong>{Home.paciente.nome}</strong></span>!
                </p>
            </div>
        </React.Fragment>
    )
}


