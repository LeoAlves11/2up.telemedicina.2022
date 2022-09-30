import React from 'react'
import Badge from 'react-bootstrap/Badge'
import * as FaIcons from 'react-icons/fa'

export default props => {
    return (
        <React.Fragment>
            <div className="badgeErro mt-2 d-flex">
                <div className="col-8">
                    <p className="pCompletarCadastro">
                        Você precisa completar o seu cadastro 
                    </p>
                </div>
                <div className="col-4 divIcone">
                    <span className="spanIconeCompletarCadastro"><FaIcons.FaChevronRight/></span>
                </div>
            </div>
        </React.Fragment>
    )
}
