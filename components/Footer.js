import Link from "next/link";
import {Container,Row,Col} from "react-bootstrap";
import React from "react";
//import styles from "../styles/A.module.css"

export default function FooterElement(){
    return(
        <Container className="mt-5 mb-1">
            <Row className="mt-3 justify-content-center">
                <Link href={"/tweets"}>
                    <a  style={{width: "auto"}}>Tweets</a>
                </Link>
                <Link href={"/persons"}>
                    <a  style={{width: "auto"}}>Persons</a>
                </Link>
                <Link href={"/entities"}>
                    <a style={{width: "auto"}}>Entities</a>
                </Link>
                <Link href={"/about"}>
                    <a style={{width: "auto"}}>About</a>
                </Link>
            </Row>
            <Row className=" mt-3 justify-content-center">Ukraine Tweets Analytics</Row>
            <Row className="justify-content-center">

                <a href="mailto:ukraine@web2ua.com" style={{width: "auto"}} >ukraine@web2ua.com</a>
            </Row>
            <Row className="justify-content-center">2022</Row>
        </Container>
    )
}