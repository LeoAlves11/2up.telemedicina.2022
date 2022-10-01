import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AuthPaciente() {

    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem("token");
        const tokenPaciente = JSON.parse(tokenString);

        return tokenPaciente;
    }

    const getPaciente = () => {
        const pacienteString = sessionStorage.getItem("paciente");
        const dados_paciente = JSON.parse(pacienteString);

        return dados_paciente;
    }

    const [token, setToken]             = useState(getToken());
    const [paciente, setPaciente]       = useState(getPaciente());

    const salvarToken = (paciente, token) => {
        sessionStorage.setItem("token", JSON.stringify(token));
        sessionStorage.setItem("paciente", JSON.stringify(paciente));

        setToken(token);
        setPaciente(paciente);
        navigate('/');
    }

    const logout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    const http = axios.create({
        baseURL: "https://2up.com.br/telemedicina/api",
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
