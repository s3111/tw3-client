import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import React from "react";
import Image from 'next/image'

export default function NavbarElement() {
    const mainTitle = "Ukraine Tweets Analytics"
    return (
        <Navbar bg="primary" variant="dark" collapseOnSelect>
            <Container style={{maxWidth: '700px'}}>
                <Link href={"/"} passHref>
                    <Navbar.Brand>
                        <Image src="/heart-.webp" width="30" height="27" className="d-inline-block align-top"
                               alt={mainTitle}/>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
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
