//import A from "./A";
//import Head from "next/head";
import NavbarElement from "./Navbar";
import React from "react";
import Footer from "./Footer";
import FooterElement from "./Footer";

const MainContainer = ({children,keywords}) => {
    const title = 'title'
    return (
        <>
            <NavbarElement/>
            <div>
                {children}
            </div>
            <FooterElement/>
        </>
    );
};

export default MainContainer;