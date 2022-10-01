import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import BGMedicos from '../../../../imagens/login/Medicos.png'
import AuthPaciente from '../../../../services/AuthPaciente'
import InputMask from 'react-input-mask'
import './Registrar.css'
import GridLoader from 'react-spinners/GridLoader'
import toast from 'react-hot-toast'
import Loading from '../../../../components/Geral/Loading'

export default props => {

    const navigate                              = useNavigate();
    const {http}                                = AuthPaciente();
    const [email, setEmail]                     = useState('');
    const [senha, setSenha]                     = useState('');
    const [cpf, setCPF]                         = useState('');
    const [confirmar_senha, setConfirmarSenha]  = useState('');
    const [nome, setNome]                       = useState('');
    const [sobrenome, setSobrenome]             = useState('');
    const [sexo, setSexo]                       = useState('');
    const [dt_nascimento, setDtNascimento]      = useState('');
    const [celular, setCelular]                 = useState('');

    const [loading, setLoading]                 = useState(false);

    
    const registrarForm = () => {
        //Login paciente

        //loading
        setLoading(true);

        http.post('/registrar', {
            cpf:cpf, 
            senha:senha, 
            confirmar_senha:confirmar_senha, 
            nome:nome, 
            sobrenome:sobrenome,
            email:email, 
            sexo:sexo, 
            dt_nascimento:dt_nascimento,
            celular:celular
        }).then((response) => {
            navigate('/login');
            setLoading(false);
            toast.success(response.data.mensagem, {style:{background: '#00b894', color: '#fff'}, duration: 6000});
        }).catch((error) =>{
            setLoading(false);

            toast.error('Erro: '+ ''+error.response.data.codigo_erro+' - '+ error.response.data.mensagem, {style:{background: '#ff7675', color: '#fff'}});
        });
    }

    const goLogin = () => {
        navigate('/')
    }


    return (
        <>
            {
                loading ? (
                    <Loading />
                )
                :
                (
                <div className="container-fluid">
                    <div className="row rowLoginBG">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mx-auto text-center">
                            <img src={BGMedicos} width="250" alt="Logo - 2UP Telemedicina"/>                        
                        </div>
                        <div className="col-12 divFormLogin">
                            <h2 className="h2Login">
                                Cadastrar-se
                            </h2>
                            <p className="text-muted pEfetueLogin">Cadastre-se na plataforma para acessar consultas de telemedicina</p>
                        </div>
                    </div>
                    <div className="row rowLogin mt-2">
                        <div className="col-12">
                        {/* Formulario para Registro */}
                        <Form>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                    {/* Nome */}
                                    <Form.Group className="mb-2" controlId="formBasicNome">
                                        <Form.Label className="labelNome">Nome</Form.Label>
                                        <Form.Control value={setNome ? nome : ''} className="inputLogin" type="text" placeholder="Nome" onChange={e => setNome(e.target.value)}/>
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                    {/* Sobrenome */}
                                    <Form.Group className="mb-2" controlId="formBasicSobrenome">
                                        <Form.Label className="labelSobrenome">Sobrenome</Form.Label>
                                        <Form.Control value={setSobrenome ? sobrenome : ''} className="inputLogin" type="text" placeholder="Sobrenome" onChange={e => setSobrenome(e.target.value)}/>
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                    {/* CPF */}
                                    <Form.Group className="mb-2" controlId="formBasicCPF">
                                        <Form.Label className="labelCPF">Seu CPF</Form.Label>
                                        <Form.Control value={setCPF ? cpf : ''} className="inputLogin" as={InputMask} mask="999.999.999-99" type="text" placeholder="CPF" onChange={e => setCPF(e.target.value)}/>
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                    {/* E-mail */}
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label className="labelEmail">E-mail</Form.Label>
                                        <Form.Control value={setEmail ? email : ''} className="inputLogin" type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                    {/* Telefone */}
                                    <Form.Group className="mb-2" controlId="formBasicTelefone">
                                        <Form.Label className="labelTelefone">Celular</Form.Label>
                                        <Form.Control value={setCelular ? celular : ''} as={InputMask} mask="(99) 99999-9999" className="inputLogin" type="text" placeholder="Telefone" onChange={e => setCelular(e.target.value)}/>
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                    {/* Data de Nascimento */}
                                    <Form.Group className="mb-2" controlId="formBasicDtNascimento">
                                        <Form.Label className="labelDtNascimento">Data de nascimento</Form.Label>
                                        <Form.Control value={setDtNascimento ? dt_nascimento : ''} className="inputLogin" type="date" onChange={e => setDtNascimento(e.target.value)}/>
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                    {/* Sexo */}
                                    <Form.Group className="mb-2" controlId="formBasicSexo">
                                        <Form.Label className="labelSexo">Sexo</Form.Label>
                                        <Form.Select value={setSexo ? sexo : ''} className="inputLogin selectRegistrar" size="lg" onChange={e => setSexo(e.target.value)}>
                                            <option>Sexo</option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Feminino">Feminino</option>
                                            <option value="Não informado">Prefiro não informar</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                    {/* Senha */}
                                    <Form.Group className="mb-2" controlId="formBasicSenha">
                                        <Form.Label className="labelSenha">Senha</Form.Label>
                                        <Form.Control value={setSenha ? senha : ''} className="inputLogin" type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)}/>
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                    {/* Confirmar Senha */}
                                    <Form.Group className="mb-2" controlId="formBasicConfirmSenha">
                                        <Form.Label className="labelSenha">Confirme sua Senha</Form.Label>
                                        <Form.Control className="inputLogin" type="password" placeholder="Confirme sua Senha" onChange={e => setConfirmarSenha(e.target.value)}/>
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 mt-5">
                                    <Button className="btnLogin" type="button" onClick={registrarForm}>
                                        Continuar
                                    </Button>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 mt-3">
                                    <Button onClick={goLogin} className="btnVoltarLogin" type="button">
                                        Já possui uma conta? Fazer o Login
                                    </Button>
                                </div>
                            </Form>
                            {/* Formulario para Registro */}
                        </div>
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