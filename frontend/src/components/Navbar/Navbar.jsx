import React, { useState, useEffect } from 'react';
import './Navbar.css';
// import './NavbarAlt.css';
import { NavbarElements } from './NavbarElements';
import { Link } from 'react-router-dom';

function Navbar()
{

    return(
        <>
        
        <div className="container-fluid navBarToggle">
            <div className="row">
                <div className="navbar">
                    <div className="col-12">
                        <ul className="nav-menu-items">
                            {NavbarElements.map((item, index) => {
                                return(
                                    <li key={index} className={item.cName}>
                                        <Link to={item.link}>
                                            <span className="iconeSpan">{item.icon}</span>
                                            <span className="nav-titulo">{item.titulo}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Navbar;