import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AuthMedico() {

    const navigate = useNavigate();

    const getTokenMedico = () => {
        const tokenString = sessionStorage.getItem("token-medico");
        const tokenMedico = JSON.parse(tokenString);

        return tokenMedico;
    }

    const getMedico = () => {
        const medicoString = sessionStorage.getItem("medico");
        const dados_medico = JSON.parse(medicoString);

        return dados_medico;
    }

    const [token, setTokenMedico]             = useState(getTokenMedico());
    const [medico, setMedico]           = useState(getMedico());

    const salvarToken = (medico, token) => {
        sessionStorage.setItem("token-medico", JSON.stringify(token));
        sessionStorage.setItem("medico", JSON.stringify(medico));

        setTokenMedico(token);
        setMedico(medico);
        navigate('/medicos/');
    }

    const logout = () => {
        sessionStorage.clear();
        navigate('/medicos/login');
    }

    const prd = "https://2up.com.br/telemedicina/api"

    const hmg = "http://localhost:8000/api"

    const http = axios.create({
        baseURL: hmg,
        headers:{
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });


    return {
        setTokenMedico:salvarToken,
        token,
        medico,
        getTokenMedico,
        http,
        logout
    }
}

export default AuthMedico
