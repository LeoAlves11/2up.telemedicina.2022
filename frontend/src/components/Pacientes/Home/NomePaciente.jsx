import React from 'react'

export default props => {
    return (
        <React.Fragment>
            <div className="col-12">
                <p className="pNomePaciente">
                    Olá, <span className="nomePaciente"><strong>{props.paciente.nome}</strong>!</span>
                </p>
            </div>
        </React.Fragment>
    )
}
