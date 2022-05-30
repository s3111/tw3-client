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
    let page = parseInt(query.x2) || 1
    let entityName = query.x1 || 'All';
    let limit = 5

    const pages = Math.ceil(tweets.count / limit)

    let title = 'Ukraine Tweets'
    let h1 = 'Ukraine Tweets'
    let description = 'Last tweets about Ukraine. List tweets Ukraine.'
    let image = '/ukraine-unity.jpeg'

    if(entityName && entityName !== 'All'){
        title = entityName +' - Ukraine Tweets - page '+ page
        h1 = entityName +' - Ukraine Tweets'
        description = `Last tweets about ${entityName} and Ukraine. List tweets Ukraine ${entityName} page ${page}.`
        image = '/ukraine-unity.jpeg'
    }else{
        title = 'Ukraine Tweets - page '+ page
        h1 = 'Ukraine Tweets'
        description = `Last tweets about Ukraine. List tweets Ukraine page ${page}.`
        image = '/ukraine-unity.jpeg'
    }

    return (
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <Container style={{maxWidth: '700px'}}>
                <h1>{h1}</h1>
                <EntitiesBar entities={entities} selectedEntityName={entityName}/>
                <PaginationBar base={`/tweets/${entityName}`} page={page} pages={pages}/>
                <div>
                    {tweets.rows.map(tweet =>
                        <TweetItem tweet = {tweet} key={tweet.tw_id} entityName={entityName}/>
                    )}
                </div>
                <PaginationBar base={`/tweets/${entityName}`} page={page} pages={pages}/>
            </Container>
        </MainContainer>
    );
};

export default Tweets;

export async function getServerSideProps({params}){
    let entityName = 'All'
    let page = 1
    entityName = params.x1
    page = parseInt(params.x2)

    console.log(params)
    let limit = 5

    const ent = await fetch(process.env.API_URL +`/entity/?searchType=Bar`)
    const tw = await fetch(process.env.API_URL +`/tweet/?searchType=Entity&entity=${entityName}&page=${page}&limit=${limit}`)
    const entities = await ent.json()
    const tweets = await tw.json()
    //const users = data
    return{
        props: {entities,tweets}
    }
}