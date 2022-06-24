import NavbarElement from "./Navbar";
import React from "react";
import FooterElement from "./Footer";

const MainContainer = ({children, keywords}) => {
    //const title = 'title'
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