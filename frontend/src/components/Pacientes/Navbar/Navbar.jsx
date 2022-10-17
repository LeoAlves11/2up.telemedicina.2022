import React, { useState, useEffect } from 'react';
import './Navbar.css';
// import './NavbarAlt.css';
import { NavbarElements } from './NavbarElements';
import { Link, Routes, Route, } from 'react-router-dom';
import Home from '../../../pages/Pacientes/Home/';
import Perfil from '../../../pages/Pacientes/Perfil';
import AuthPaciente from '../../../services/AuthPaciente';
import Loading from '../../Geral/Loading';
import Consultas from '../../Geral/Consulta/Consultar';
import Sala from '../../Geral/Consulta/Sala';
import NotFound from '../../Geral/PaginaNotFound/NotFound';

const Navbar = () => {

    const {http} = AuthPaciente();

    const [dados_paciente, setDadosPaciente]    = useState('');

    const [loading, setLoading]                 = useState(false);

    useEffect(() => {
        fetchDadosPaciente();
    }, []);

    const fetchDadosPaciente = () => {
        setLoading(true);
        http.post('/paciente/get-paciente').then((response) => {
            setDadosPaciente(response.data);
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
                            <div className="container">
                                <div className="row mx-auto">
                                    <div className="navbar">
                                        <div className="col-12 text-center">
                                            <ul className="nav-menu-items">
                                                {NavbarElements.map((item, index) => {
                                                    return(
                                                        <li key={index} className={item.cName}>
                                                            <Link to={item.link} onClick={fetchDadosPaciente}>
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
                        </div>

                        <Routes>
                            <Route exact path="/" element={<Home paciente={dados_paciente}/>} />
                            <Route path="/perfil" element={<Perfil paciente={dados_paciente}/>} />
                            <Route path="/consultas" element={<Consultas usuario={dados_paciente}/>} />
                            <Route exact path="/consultas/sala/:id" element={<Sala usuario={dados_paciente}/>} />
                        </Routes>
                    </>
                )
            }
                
            </>
        )
}

export default Navbar

