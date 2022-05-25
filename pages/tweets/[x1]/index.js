import React from "react"
import {useRouter} from "next/router";
import MainContainer from "../../../components/MainContainer";
import {Row, Col, Container} from "react-bootstrap";
import PaginationBar from "../../../components/PaginationBar";
import HeadBlock from "../../../components/HeadBlock";
import EntitiesBar from "../../../components/EntitiesBar";
import TweetItem from "../../../components/TweetItem";
const Tweets = ({entities,tweets}) => {
    const {query} = useRouter()
    let entityName = 'All'
    let page = 1
    let x1 = query.x1
    if (x1 != parseInt(x1)){
        entityName = x1
    }else {
        page = parseInt(x1)
    }

    let limit = 10
    const pages = Math.ceil(tweets.count / limit)

    let title = 'Ukraine Tweets'
    let h1 = 'Ukraine Tweets'
    let description = 'Last tweets about Ukraine. List tweets Ukraine.'
    let image = '/ukraine-unity.jpeg'

    return (
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <h1>{h1}</h1>
            <EntitiesBar entities={entities} selectedEntityName={entityName}/>
            <PaginationBar base={
                entityName
                    ? `/tweets/${entityName}`
                    : "/tweets"
            } page={page} pages={pages}/>
            <Container>
                {tweets.rows.map(tweet =>
                    <Row key={tweet.tw_id}>
                        <Col>
                            <TweetItem tweet = {tweet} />
                        </Col>
                    </Row>
                )}
            </Container>
        </MainContainer>
    );
};

export default Tweets;

export async function getServerSideProps({params}){
    let entityName = 'All'
    let page = 1
    if (params.x1 != parseInt(params.x1)){
        entityName = params.x1
    }else {
        page = parseInt(params.x1)
    }
    console.log(params)
    let limit = 10

    const ent = await fetch(`https://ukraine.web2ua.com/api/entity/?searchType=Bar`)
    const tw = await fetch(`https://ukraine.web2ua.com/api/tweet/?searchType=Entity&entity=${entityName}&page=${page}&limit=${limit}`)
    const entities = await ent.json()
    const tweets = await tw.json()
    //const users = data
    return{
        props: {entities,tweets}
    }
}