import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ALink, SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSearch, SSearchIcon, SSIdebar, STheme, SThemeLabel, SThemeToggler, SToggleThumb } from "./Style";
import LogoTelevet from '../../../../assets/logo/Logo.png';
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineClose, AiOutlineHome, AiOutlineSearch, AiOutlineSetting, AiOutlineUser, AiOutlineVideoCamera } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { ThemeContext } from "../Navbar/Navbar";
import AuthPaciente from "../../../../services/AuthPaciente";
import { useNavigate } from "react-router";

export default function Sidebar() {

    const navigate = useNavigate();

    const { logout, token } = AuthPaciente(); 

    const linksArray = [
        {
            label: "Home",
            icon: <AiOutlineHome />,
            to: "/",
            notification: 3,
        },
        {
            label: "Agendar Consulta",
            icon: <AiOutlineCalendar />,
            to: "/consultas",
            notification: 0,
        },
        {
            label: "Consultar Agora",
            icon: <AiOutlineVideoCamera />,
            to: "/",
            notification: 0,
        },
        {
            label: "Histórico",
            icon: <AiOutlineClockCircle />,
            to: "/historico",
            notification: 4,
        }
    ];

    const logoutPaciente = () => {
        if(token !== undefined)
        {
            logout();
        }
    }

    const {setTheme, theme} = useContext(ThemeContext);

    return (
        <SSIdebar>
            <SLogo>
                <img src={LogoTelevet} alt="Logo - Televet"/>
            </SLogo>
            <SSearch>
                <SSearchIcon>
                    <AiOutlineSearch />
                </SSearchIcon>
                <input type="text"  placeholder="Pesquisar"/>
            </SSearch>
            <SDivider />
            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label}>
                    <a href={to}>
                        <SLink>
                            <SLinkIcon>{icon}</SLinkIcon>
                            <SLinkLabel>{label}</SLinkLabel>
                            {!!notification && (<SLinkNotification>{notification}</SLinkNotification>)}
                        </SLink>
                    </a>
                </SLinkContainer>
            ))}
            <SDivider />
            <SLinkContainer>
                <SLink>
                    <SLinkIcon><AiOutlineUser /></SLinkIcon>
                    <SLinkLabel>Perfil</SLinkLabel>
                </SLink>
            </SLinkContainer>
            <SLinkContainer>
                <SLink onClick={logoutPaciente}>
                    <SLinkIcon><MdLogout /></SLinkIcon>
                    <SLinkLabel>Sair</SLinkLabel>
                </SLink>
            </SLinkContainer>
            <SDivider />
            <STheme>
                <SThemeLabel>Modo Escuro</SThemeLabel>
                <SThemeToggler 
                    isActive={theme === 'dark'} 
                    onClick={() => setTheme((p) => (p === 'light' ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? {right: "1px"}: {}}/>
                </SThemeToggler>
            </STheme> 
        </SSIdebar>
    )

    
}