import React, { useState, useEffect } from 'react'
import NomePaciente from '../../../components/Pacientes/Home/NomePaciente'
import CompletarDados from '../../../components/Pacientes/Home/CompletarDados'
import './Home.css'
import Cards from '../../../components/Pacientes/Home/Cards'

export default Home => {

    return (
        <React.Fragment>
            <div className="container divContent">
                <div className="row">
                    <NomePaciente paciente={Home.paciente}/>
                    {/* <CompletarDados /> */}
                    <Cards />
                </div>
            </div>
        </React.Fragment>
    )
}


