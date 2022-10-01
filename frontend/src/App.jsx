import { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Pacientes/Navbar/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Pacientes/Auth/Login/Login';
import Registrar from './pages/Pacientes/Auth/Registro/Registrar';
import Landing from './pages/Pacientes/Auth/Login/Landing';
import AuthPaciente from './services/AuthPaciente';
import { Toaster } from 'react-hot-toast';

function App() {

  const versao_app = "v0.1.8";

  const {getToken} = AuthPaciente();
  

  if(!getToken()){
    
    return (
      <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login app_version={versao_app} />}/>
        <Route path="/login" element={<Login app_version={versao_app} />}/>
        <Route path="/registrar" element={<Registrar app_version={versao_app} />}/>
      </Routes>
      </>
    )
  }
  return (
    
    <>
      <Navbar />
    </>
  );
}

export default App;
