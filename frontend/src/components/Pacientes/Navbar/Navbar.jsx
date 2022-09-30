import React, { useState, useEffect } from 'react';
import './Navbar.css';
// import './NavbarAlt.css';
import { NavbarElements } from './NavbarElements';
import { Link, Routes, Route, } from 'react-router-dom';
import Home from '../../../pages/Home';
import Perfil from '../../../pages/Usuario/Perfil';
import AuthPaciente from '../../../services/AuthPaciente';
import Loading from '../../Geral/Loading';

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
                            <div className="row">
                                <div className="navbar">
                                    <div className="col-12">
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

                        <Routes>
                            <Route path="/" element={<Home paciente={dados_paciente}/>} />
                            <Route path="/perfil" element={<Perfil paciente={dados_paciente}/>} />
                        </Routes>
                    </>
                )
            }
                
            </>
        )
}

export default Navbar

