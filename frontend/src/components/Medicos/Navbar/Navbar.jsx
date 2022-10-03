import React, { useState, useEffect } from 'react';
import './Navbar.css';
// import './NavbarAlt.css';
import { NavbarElements } from './NavbarElements';
import { Link, Routes, Route, } from 'react-router-dom';
import Home from '../../../pages/Medicos/Home';
import Perfil from '../../../pages/Medicos/Perfil';
import AuthMedicos from '../../../services/AuthMedicos';
import Loading from '../../Geral/Loading';
import Consultar from '../../Geral/Consulta/Consultar';

const NavbarMedico = () => {

    const {http} = AuthMedicos();

    const [dados_medico, setDadosMedico]        = useState('');

    const [loading, setLoading]                 = useState(false);

    useEffect(() => {
        fetchDadosMedico();
    }, []);

    const fetchDadosMedico = () => {
        setLoading(true);
        http.post('/medicos/get-medico').then((response) => {
            setDadosMedico(response.data);
            setLoading(false);
        });
    }

        return(
            <>
            
            {
                loading ?
                (
                    <Loading />
                )
                :
                (
                    <>
                        <div className="container-fluid navBarToggle">
                            <div className="row">
                                <div className="navbar">
                                    <div className="col-12">
                                        <ul className="nav-menu-items">
                                            {NavbarElements.map((item, index) => {
                                                return(
                                                    <li key={index} className={item.cName}>
                                                        <Link to={item.link} onClick={fetchDadosMedico}>
                                                            <span className="iconeSpan">{item.icon}</span>
                                                            <span className="nav-titulo">{item.titulo}</span>
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Routes>
                            <Route path="/medicos/" element={<Home medico={dados_medico}/>} />
                            <Route path="/medicos/perfil" element={<Perfil medico={dados_medico}/>} />
                            <Route path="/medicos/consultar-agora" element={<Consultar usuario={dados_medico}/>} />
                        </Routes>
                    </>
                )
            }
                
            </>
        )
}

export default NavbarMedico

