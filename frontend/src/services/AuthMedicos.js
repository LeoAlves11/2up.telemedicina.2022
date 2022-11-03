import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AuthMedico() {

    const navigate = useNavigate();

    const getTokenMedico = () => {
        const tokenString = localStorage.getItem("token-medico");
        const tokenMedico = JSON.parse(tokenString);

        return tokenMedico;
    }

    const getMedico = () => {
        const medicoString = localStorage.getItem("medico");
        const dados_medico = JSON.parse(medicoString);

        return dados_medico;
    }

    const [token, setTokenMedico]               = useState(getTokenMedico());
    const [medico, setMedico]                   = useState(getMedico());

    const salvarToken = (medico, token) => {
        localStorage.setItem("token-medico", JSON.stringify(token));
        localStorage.setItem("medico", JSON.stringify(medico));

        setTokenMedico(token);
        setMedico(medico);
        navigate('/medicos/');
    }

    const logout = () => {
        localStorage.clear();
        navigate('/medicos/login');
    }

    const prd = "https://2up.com.br/telemedicina/api"

    const hmg = "http://localhost:8000/api"

    const http = axios.create({
        baseURL: prd,
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
