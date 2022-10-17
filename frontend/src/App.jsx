import { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarPacientes from './components/Pacientes/Navbar/Navbar';
import NavbarMedicos from './components/Medicos/Navbar/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Pacientes/Auth/Login/Login';
import LoginMedicos from './pages/Medicos/Auth/Login/LoginMedico';
import Registrar from './pages/Pacientes/Auth/Registro/Registrar';
import Landing from './pages/Pacientes/Auth/Login/Landing';
import AuthPaciente from './services/AuthPaciente';
import AuthMedicos from './services/AuthMedicos';
import { Toaster } from 'react-hot-toast';

function App() {

  const versao_app = "v0.2.0";

  const {getToken} = AuthPaciente();

  const {getTokenMedico} = AuthMedicos();
  

  if(!getToken() && !getTokenMedico()){
    
    return (
      <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login app_version={versao_app} />}/>
        <Route path="/login" element={<Login app_version={versao_app} />}/>
        <Route path="/registrar" element={<Registrar app_version={versao_app} />}/>
        <Route path="/medicos/login" element={<LoginMedicos app_version={versao_app}/>}/>
      </Routes>
      </>
    )
  }
  
  if(getToken())
  {
    return (
    
      <>
        <NavbarPacientes />
      </>
    );
  }else if(getTokenMedico()){
    return (
    
      <>
        <NavbarMedicos />
      </>
    );
  }
}

export default App;
