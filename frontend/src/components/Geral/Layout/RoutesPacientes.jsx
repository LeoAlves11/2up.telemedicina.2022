import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, } from 'react-router-dom';
import Home from '../../../pages/Pacientes/Home';
import Perfil from '../../../pages/Pacientes/Perfil';
import AuthPaciente from '../../../services/AuthPaciente';
import Loading from '../../Geral/Loading';
import Consultas from '../../Geral/Consulta/Consultar';
import Sala from '../../Geral/Consulta/Sala';
import NotFound from '../../Geral/PaginaNotFound/NotFound';

export default function RoutesPacientes() {

    const {http} = AuthPaciente();

    const [dados_paciente, setDadosPaciente]    = useState('');

    const [loading, setLoading]                 = useState(false);

    useEffect(() => {
        fetchDadosPaciente();
    }, []);

    async function fetchDadosPaciente() {
        setLoading(true);
        http.post('/paciente/get-paciente').then((response) => {
            setDadosPaciente(response.data);
            setLoading(false);
        });
    }

    return(
        <Routes>
            <Route exact path="/" element={<Home paciente={dados_paciente}/>} />
            <Route path="/perfil" element={<Perfil paciente={dados_paciente}/>} />
            <Route path="/consultas" element={<Consultas usuario={dados_paciente}/>} />
            {/* <Route exact path="/consultas/sala/" element={<Sala usuario={dados_paciente}/>} /> */}
        </Routes>
    )
}