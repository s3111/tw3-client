import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import styles from "../styles/A.module.css";
import Container from "react-bootstrap/Container";
import React from "react";
import Image from 'next/image'
//import logo from "/heart-.webp"
export default function NavbarElement(){
    const mainTitle = "Ukraine Tweets Analytics"
    return(
/*
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/persons">Persons</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

 */
        /*
        <img src={logo} width="26" height="26" className="d-inline-block align-top" alt={ogTitle}/>

                        <Nav.Link onClick={() => history.push(TWEETS_ROUTE)}
                                  style={wlp.includes(TWEETS_ROUTE) ? {cursor:'pointer',color: '#fff'} : {cursor:'pointer',color: '#eee'}}
                        >Tweets</Nav.Link>
                         <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
<Navbar bg="primary" variant="dark"  collapseOnSelect expand="sm" >
        */

        <Navbar bg="primary" variant="dark"  collapseOnSelect  >
            <Container style={{maxWidth: '700px'}}>
                <Link href={"/"} passHref>
                    <Navbar.Brand>
                        <Image src="/heart-.webp" width="30" height="27" className="d-inline-block align-top" alt={mainTitle} />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Link href={"/tweets"} passHref>
                            <Nav.Link>Tweets</Nav.Link>
                        </Link>
                        <Link href={"/persons"} passHref>
                            <Nav.Link>Persons</Nav.Link>
                        </Link>
                        <Link href={"/entities"} passHref>
                            <Nav.Link>Entities</Nav.Link>
                        </Link>
                        <Link href={"/statistics"} passHref>
                            <Nav.Link>Stat</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}
