//import {useEffect, useState} from "react"
import React from "react"
import {useRouter} from "next/router";
import Link from "next/link";
import MainContainer from "../../components/MainContainer";
import {Card, Row, Col, Pagination} from "react-bootstrap";
import Head from "next/head";
//import Col from "react-bootstrap/Col";

import Image from "next/image";
import PersonListItem from "../../components/PersonListItem";
import PaginationBar from "../../components/PaginationBar";
import HeadBlock from "../../components/HeadBlock";
const Persons = ({users}) => {
    const {query} = useRouter()
    let page = 1
    let limit = 20
    const pages = Math.ceil(users.count / limit)

    let title = 'Ukraine Tweets'
    let h1 = 'Persons - Ukraine Tweets'
    let description = 'Twitter persons list with count tweets about Ukraine'
    let image = '/ukraine-unity.jpeg'

    return (
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <h1>{h1}</h1>
            <PaginationBar base={"/persons"} page={page} pages={pages}/>
            <ul>
                {users.rows.map(user =>
                    <li key={user.user_id}>
                        <PersonListItem user = {user}/>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Persons;

export async function getServerSideProps({params}){
    //let page = params.page ?? 1
    //let limit = params.limit ?? 20
    console.log(params)
    let page = 1
    let limit = 20
    const response = await fetch(`https://ukraine.web2ua.com/api/person/?searchType=List&page=${page}&limit=${limit}`)
    const data = await response.json()
    const users = data
    return{
        props: {users}
    }
}