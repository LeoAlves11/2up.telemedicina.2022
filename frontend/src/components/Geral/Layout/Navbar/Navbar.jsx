import React, { useState } from "react";
import { Link, Routes, Route, } from 'react-router-dom';
import { Helmet } from "react-helmet";
import './Navbar.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from "../../../Geral/Styles/Theme";
import { GlobalStyle } from "../../../Geral/Styles/GlobalStyle";
import { Layout } from "../Layout";
import RoutesPacientes from "../RoutesPacientes";

export const ThemeContext = React.createContext(null);

export default function Navbar(props){

    const [theme, setTheme] = useState('light');
    const themeStyle = theme === 'light' ? lightTheme : darkTheme;

    return(
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle/>

                {/* Header / HEAD */}
                <Helmet>
                    <title>Home - {props.nome_app}</title>
                </Helmet>

                <>
                    <Layout> 
                        <RoutesPacientes />
                    </Layout>
                </>

            </ThemeProvider>
        </ThemeContext.Provider>
    )

}