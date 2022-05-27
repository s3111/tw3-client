//import {useEffect, useState} from "react"
import React from "react"
import {useRouter} from "next/router";
import Link from "next/link";
import MainContainer from "../../components/MainContainer";
import {Card, Row, Col, Pagination, Container} from "react-bootstrap";
import Head from "next/head";
//import Col from "react-bootstrap/Col";

import Image from "next/image";
import PersonListItem from "../../components/PersonListItem";
import PaginationBar from "../../components/PaginationBar";
import HeadBlock from "../../components/HeadBlock";
const Persons = ({users}) => {
    const {query} = useRouter()
    let page = 1
    let limit = 10
    const pages = Math.ceil(users.count / limit)

    let title = 'Ukraine Tweets'
    let h1 = 'Persons - Ukraine Tweets'
    let description = 'Twitter persons list with count tweets about Ukraine'
    let image = '/ukraine-unity.jpeg'

    return (
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <Container style={{maxWidth: '700px'}}>
                <h1>{h1}</h1>
                <PaginationBar base={"/persons"} page={page} pages={pages}/>
                <div>
                    {users.rows.map(user =>
                        <Row key={user.user_id}>
                            <Col xs={9} >
                                <PersonListItem user = {user}/>
                            </Col>
                            <Col xs={3}>
                                <span >{user.tw_count}</span>
                            </Col>
                        </Row>
                    )}
                </div>
                <PaginationBar base={"/persons"} page={page} pages={pages}/>
            </Container>
        </MainContainer>
    );
};

export default Persons;

export async function getServerSideProps({params}){
    //let page = params.page ?? 1
    //let limit = params.limit ?? 20
    console.log(params)
    let page = 1
    let limit = 10
    const response = await fetch(process.env.API_URL +`/person/?searchType=List&page=${page}&limit=${limit}`)
    const data = await response.json()
    const users = data
    return{
        props: {users}
    }
}