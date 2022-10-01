import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Login.css'
import BGMedicos from '../../../../imagens/login/Medicos.png'
import AuthPaciente from '../../../../services/AuthPaciente'
import GridLoader from 'react-spinners/GridLoader'
import toast from 'react-hot-toast'
import Loading from '../../../../components/Geral/Loading'

export default props => {

    const {http, setToken}              = AuthPaciente();
    const navigate                      = useNavigate();
    const [email, setEmail]             = useState('');
    const [senha, setSenha]             = useState('');

    const [loading, setLoading]                 = useState(false);

    
    const loginForm = () => {
        //Login paciente

        //loading
        setLoading(true);

        http.post('/login', {
            email:email,
            password:senha
        }).then((response) => {
            setToken(response.data.paciente, response.data.access_token);
            //loading
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            if(error.response.data.codigo_erro === '5004')
            {
                toast.error(<span>{error.response.data.mensagem}<Link className="erroCadastro" to="/registrar">cadastrar-se?</Link></span>, {style:{background: '#e74c3c', color: '#fff'}, duration: 3500},);
            }else if(error.response.data.codigo_erro === '5005'){
                toast.error(<span>{'Erro: '+ '' +error.response.data.codigo_erro+ ' - ' +error.response.data.mensagem}<Link className="erroAtivar" to="/ativar-conta">ativar agora?</Link></span>, {style:{background: '#0984e3', color: '#fff'}, duration: 3000});
                sessionStorage.setItem('email_temporario', error.response.data.email_temporario);
                sessionStorage.setItem('cel_temporario', error.response.data.cel_temporario);
                sessionStorage.setItem('token_temporario', error.response.data.token_temporario);
            }
            else{
                toast.error('Erro: '+ '' +error.response.data.codigo_erro+ ' - ' +error.response.data.mensagem, {style:{background: '#e74c3c', color: '#fff'}, duration: 5000});
                setSenha(null);
            }
            setLoading(false);
        });
    }

    const goRegistrar = () => {
        navigate('/registrar')
    }


    return (
        <>
            {
                loading ? 
                (
                    <Loading />
                )
                :
                (
                <div className="container">
                        <div className="row rowLoginBG">
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mx-auto text-center">
                                <img src={BGMedicos} width="250" alt="Logo - 2UP Telemedicina"/>                        
                            </div>
                            <div className="col-12 divFormLogin">
                                <h2 className="h2Login">
                                    Fazer Login
                                </h2>
                                <p className="text-muted pEfetueLogin">Efetue o login para realizar consultas</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <Form>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mx-auto">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control value={setEmail ? email : ''} type="email" placeholder="Digite o seu e-mail" onChange={e => setEmail(e.target.value)}/>
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mx-auto">
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Senha</Form.Label>
                                        <Form.Control type="password" placeholder="Digite a sua senha" onChange={e => setSenha(e.target.value)}/>
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 mt-2">
                                    <Link to="#" className="linkEsqueceuSenha">
                                        Esqueceu sua senha?
                                    </Link>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-4 mx-auto text-center">
                                    <Button className="btnLogin" type="button" onClick={loginForm}>
                                        Continuar
                                    </Button>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-3">
                                    <Button onClick={goRegistrar} className="btnRegistrar" type="button">
                                        Cadastrar-se
                                    </Button>
                                </div>
                            </Form>
                        </div>
                        <div className="row">
                            <div className="col-12 divVersaoApp">
                                <p className="text-muted versaoApp">{props.app_version}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}


