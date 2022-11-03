import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import NavbarPacientes from './components/Pacientes/Navbar/Navbar';
import NavbarPacientes from './components/Geral/Layout/Navbar/Navbar';
import NavbarMedicos from './components/Medicos/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Pacientes/Auth/Login/Login';
import LoginMedicos from './pages/Medicos/Auth/Login/LoginMedico';
import Registrar from './pages/Pacientes/Auth/Registro/Registrar';
import AuthPaciente from './services/AuthPaciente';
import AuthMedicos from './services/AuthMedicos';
import { Toaster } from 'react-hot-toast';

function App() {

  const versao_app = "v0.2.2"; // Versão atual do APP (alterar ao fazer um commit no git)
  const nome_app = 'Televet'; // Nome atual do App

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
        <NavbarPacientes nome_app={nome_app}/>
      </>
    );
  }else if(getTokenMedico()){
    return (
    
      <>
        <NavbarMedicos nome_app={nome_app}/>
      </>
    );
  }
}

export default App;
