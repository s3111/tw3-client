import React, {useEffect, useState} from "react"
import {useRouter} from "next/router";
import Link from "next/link";
import MainContainer from "../../components/MainContainer";
import {Col, Container, Pagination, Row} from "react-bootstrap";
import HeadBlock from "../../components/HeadBlock";
import PaginationBar from "../../components/PaginationBar";
import PersonListItem from "../../components/PersonListItem";
import PersonSearchForm from "../../components/PersonSearchForm";
const Persons = ({users}) => {
    const {query} = useRouter()
    let page = parseInt(query.page)
    let order = query.order || 'statusesCapt'
    let verified = query.verified

    let limit = 10
    const pages = Math.ceil(users.count / limit)

    let title = 'Ukraine Tweets'
    let h1 = 'Persons - Ukraine Tweets'
    let description = 'Twitter persons list with count tweets about Ukraine'
    let image = '/ukraine-unity.jpeg'

    const formatter = (num) => {
        let res = ''
        if(Math.abs(num)    > 999999) res = Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'M'
        else if(Math.abs(num)    > 9999) res = Math.sign(num)*((Math.abs(num)/1000).toFixed(0)) + 'k'
        else if(Math.abs(num) > 999) res = Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k'
        else res = Math.sign(num)*Math.abs(num)
        return res
    }

    return (
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <Container style={{maxWidth: '700px'}}>
                <h1>{h1}</h1>
                <PersonSearchForm order={order} verified={verified}/>
                <PaginationBar base={"/persons"} page={page} pages={pages} query={query}/>
                <div>
                    {users.rows.map(user =>
                        <Row key={user.tw_id} className={"my-2"}>
                            <Col xs={6}>
                                <PersonListItem user = {user}/>
                            </Col>
                            <Col xs={6} >
                                <Row>
                                    <Col className={"text-right"}>
                                       {formatter(user.followers_count)}
                                    </Col>
                                    <Col className={"text-right"}>
                                       {formatter(user.friends_count)}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className={"text-right"}>
                                       {formatter(user.statuses_count)}
                                    </Col>
                                    <Col className={"text-right"}>
                                       {formatter(user.statuses_capt_count)}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    )}
                </div>
                <PaginationBar base={"/persons"} page={page} pages={pages} query={query}/>
            </Container>
        </MainContainer>
    );
};

export default Persons;

export async function getServerSideProps({params,query}){
    let page = params.page ?? 1
    let order = query.order ?? 'default'
    let verified = query.verified
    console.log(params)
    //let page = 1
    let limit = 10
    const response = await fetch(process.env.API_URL +`/person/?searchType=List&verified=${verified}&order=${order}&page=${page}&limit=${limit}`)
    const data = await response.json()
    const users = data
    return{
        props: {users}
    }
}