import React from 'react'
import Badge from 'react-bootstrap/Badge'
import * as FaIcons from 'react-icons/fa'

export default props => {
    return (
        <React.Fragment>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-5 col-xl-5 mx-auto">
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
            </div>
        </React.Fragment>
    )
}
