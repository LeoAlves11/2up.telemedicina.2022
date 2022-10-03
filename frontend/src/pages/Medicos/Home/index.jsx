import React, { useState, useEffect } from 'react'
import NomeMedico from '../../../components/Medicos/Home/NomeMedico'
import CompletarDados from '../../../components/Medicos/Home/CompletarDados'
import './HomeMedico.css'

export default Home => {

    return (
        <React.Fragment>
            <div className="container divContent">
                <div className="row">
                    <NomeMedico medico={Home.medico}/>
                    <CompletarDados />
                </div>
            </div>
        </React.Fragment>
    )
}


