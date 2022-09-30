import { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Auth/Login/Login';
import Registrar from './pages/Auth/Registro/Registrar';
import Landing from './pages/Auth/Login/Landing';
import AuthPaciente from './services/AuthPaciente';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Perfil from './pages/Usuario/Perfil';
import GridLoader from 'react-spinners/GridLoader';

function App() {

  const {http, getToken} = AuthPaciente();

  const [dados_paciente, setDadosPaciente]    = useState('');

  const [loading, setLoading]                 = useState(false);

  useEffect(() => {
    fetchDadosPaciente();
    setLoading(true);
  }, []);

  const fetchDadosPaciente = () => {
      http.post('/paciente/get-paciente').then((response) => {
          setDadosPaciente(response.data);
          setLoading(false);
      });
  }

  if(!getToken()){
    return (
      <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/registrar" element={<Registrar />}/>
      </Routes>
      </>
    )
  }
  return (
    <>
      {
        loading ?
        (
          <>
            <div className="row">
                <div className="col-12 divLoadingSpinner">
                    <GridLoader color="#32cdc4" />
                </div>
            </div>
          </>
        )
        :
        (
          <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home paciente={dados_paciente} />}/>
                <Route path="/home" element={<Home paciente={dados_paciente} />}/>
                <Route path="/perfil" element={<Perfil paciente={dados_paciente} />}/>
            </Routes>
          </>
        )
      }
    </>
  );
}

export default App;
