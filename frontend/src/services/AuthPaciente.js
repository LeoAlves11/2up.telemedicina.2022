import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AuthPaciente() {

    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = localStorage.getItem("token");
        const tokenPaciente = JSON.parse(tokenString);

        return tokenPaciente;
    }

    const getPaciente = () => {
        const pacienteString = localStorage.getItem("paciente");
        const dados_paciente = JSON.parse(pacienteString);

        return dados_paciente;
    }

    const [token, setToken]             = useState(getToken());
    const [paciente, setPaciente]       = useState(getPaciente());

    const salvarToken = (paciente, token) => {
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("paciente", JSON.stringify(paciente));

        setToken(token);
        setPaciente(paciente);
        navigate('/');
    }

    const logout = () => {
        localStorage.clear();
        navigate('/login');
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
        setToken:salvarToken,
        token,
        paciente,
        getToken,
        http,
        logout
    }
}

export default AuthPaciente
