import Link from "next/link";
import {Container,Row,Col} from "react-bootstrap";
import React from "react";
//import styles from "../styles/A.module.css"

export default function FooterElement(){
    return(
        <Container className="mt-5 mb-1">
            {
                /*

                 */
            }
            <Row className="mt-3 justify-content-center">
                <a href={"/tweets"} style={{width: "auto"}}>Tweets</a>
                <a href={"/persons"} style={{width: "auto"}}>Persons</a>
                <a href={"/entities"} style={{width: "auto"}}>Entities</a>
            </Row>
            <Row className=" mt-3 justify-content-center">Ukraine Tweets Analytics</Row>
            <Row className="justify-content-center">
                <a href="mailto:ukraine@web2ua.com" style={{width: "auto"}} >ukraine@web2ua.com</a>
            </Row>
            <Row className="justify-content-center">2022</Row>
        </Container>
    )
}