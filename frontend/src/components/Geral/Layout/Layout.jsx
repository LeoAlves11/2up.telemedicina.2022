import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { SLayout, SMain } from "./Style";
import NavbarMobile from './Navbar/Mobile/Navbar';


export const Layout = ({ children }) => {
    return <SLayout>
        <Sidebar />
        {/* <NavbarMobile /> */}
        <SMain> {children} </SMain>
    </SLayout>
}