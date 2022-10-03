import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';

export const NavbarElements = [
    {
        titulo: 'Home',
        link: '/medicos/',
        icon: <AiIcons.AiOutlineHome/>,
        cName: 'nav-text',
        action: ''
    },
    {
        titulo: 'Agenda',
        link: '/agendar',
        icon: <IoIcons.IoMdCalendar/>,
        cName: 'nav-text',
        action: ''
    },
    {
        titulo: 'Pacientes',
        link: '/medicos/consultar-agora',
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
        link: '/medicos/perfil',
        icon: <MdIcons.MdHealthAndSafety/>,
        cName: 'nav-text',
        action: ''
    }
]

