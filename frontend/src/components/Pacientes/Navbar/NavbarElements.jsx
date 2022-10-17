import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';

export const NavbarElements = [
    {
        titulo: 'Home',
        link: '/',
        icon: <AiIcons.AiOutlineHome/>,
        cName: 'nav-text',
        action: ''
    },
    {
        titulo: 'Agendar',
        link: '/agendar',
        icon: <IoIcons.IoMdCalendar/>,
        cName: 'nav-text',
        action: ''
    },
    {
        titulo: 'Consultar',
        link: '/consultas',
        icon: <BiIcons.BiPlusMedical/>,
        cName: 'nav-text btnConsultar',
        action: ''
    },
    {
        titulo: 'Notificações',
        link: '/notificacoes',
        icon: <IoIcons.IoMdNotificationsOutline/>,
        cName: 'nav-text',
        action: ''
    },
    {
        titulo: 'Perfil',
        link: '/perfil',
        icon: <BiIcons.BiUser/>,
        cName: 'nav-text',
        action: ''
    }
]

