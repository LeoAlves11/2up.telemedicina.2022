import React from 'react'

export default props => {
    return (
        <React.Fragment>
            <div className="col-12">
                <p className="pNomeMedico">
                    Olá, <span className="nomeMedico"><strong>{props.medico.nome}</strong>!</span>
                </p>
            </div>
        </React.Fragment>
    )
}
