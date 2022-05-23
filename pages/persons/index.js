//import {useEffect, useState} from "react"
import React from "react"
import {useRouter} from "next/router";
import Link from "next/link";
import MainContainer from "../../components/MainContainer";
import {Card, Row, Col, Pagination} from "react-bootstrap";
import Head from "next/head";
//import Col from "react-bootstrap/Col";
import {asPath} from "next";
import Image from "next/image";
import PersonListItem from "../../components/PersonListItem";
const Persons = ({users}) => {
    const {query} = useRouter()
    let page = 1
    let limit = 20
    const pageCount = Math.ceil(users.count / limit)

    let ogTitle = 'Ukraine Tweets'
    let h1 = 'Persons - Ukraine Tweets'
    let ogDescription = 'Twitter persons list with count tweets about Ukraine'
    let ogImage = '/ukraine-unity.jpeg'

    return (
        <MainContainer>
            <Head>
                <title>{ogTitle}</title>
                <meta name="description" content={ogDescription} />
                <meta name="twitter:card" content={ogImage} />
                <meta name="twitter:title" content={ogTitle} />
                <meta name="twitter:description" content={ogDescription} />
                <meta name="twitter:image" content={ogImage} />
                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content={ogImage} />


                <meta property="og:url" content={asPath} />
                <meta property="og:site_name" content="Ukraine Twitter Analytics" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
            </Head>
            <h1>Persons</h1>
            <Pagination className="mt-3">
                <Pagination.First
                    disabled = {page === 1 }
                    href = {"/persons"}
                    //onClick={() => servers.setPage(1)}
                />
                <Pagination.Prev
                    disabled = {page === 1}
                    //onClick={() => servers.setPage(servers.page-1)}
                    href = {`/persons/${page - 1}`}
                />
                <Pagination.Item
                    //active={true}
                    //disabled = {disabled}
                >
                    {page} of {pageCount}
                </Pagination.Item>
                <Pagination.Next
                    disabled = {page === pageCount}
                    //onClick={() => servers.setPage(servers.page+1)}
                    href = {`/persons/${page + 1}`}
                />
                <Pagination.Last
                    disabled = {page === pageCount}
                    //onClick={() => servers.setPage(pageCount)}
                    href = {`/persons/${pageCount}`}
                />
            </Pagination>
            <ul>
                {users.rows.map(user =>
                    <li key={user.user_id}>
                        <PersonListItem user = {user}/>
                        {
                            /*
                        <Row key={user.user_id} className={"mt-2"} xs={1} sm={2}>
                            <Col>
                                <Row
                                    style={{cursor: 'pointer',}}
                                    //onClick={() => selectPerson(i)}
                                >
                                    <Col xs="auto">
                                        <img style={{borderRadius: '50%'}} src={user.profile_image_url_https}/>
                                    </Col>
                                    <Col>
                                        <Row>
                                    <span className="font-weight-bold">
                                        <a href={`/person/${user.screen_name}`}>
                                            {user.name}</a>
                                    </span>
                                        </Row>
                                        <Row>
                                            <span className="text-secondary text-sm-start" style={{fontSize:'.875rem'}}>@{user.screen_name}</span>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={1}>{user.tw_count}</Col>

                        </Row>
                             */
                        }

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