import React from "react"
import {useRouter} from "next/router";
import MainContainer from "../../../components/MainContainer";
import {Container} from "react-bootstrap";
import PaginationBar from "../../../components/PaginationBar";
import HeadBlock from "../../../components/HeadBlock";
import EntitiesBar from "../../../components/EntitiesBar";
import TweetItem from "../../../components/TweetItem";
import TweetsSearchForm from "../../../components/TweeetsSearchForm";

const Tweets = ({entities, tweets}) => {
    const {query} = useRouter()
    let entityName = 'All'
    let page = 1
    let x1 = query.x1
    if (x1 != parseInt(x1)) {
        entityName = x1
    } else {
        page = parseInt(x1)
    }
    let verified = query.verified

    let limit = 5
    const pages = Math.ceil(tweets.count / limit)

    let title = 'Ukraine Tweets'
    let h1 = 'Ukraine Tweets'
    let description = 'Last tweets about Ukraine. List tweets Ukraine.'
    let image = '/ukraine-unity.jpeg'

    if (entityName && entityName !== 'All') {
        title = entityName + ' - Ukraine Tweets'
        h1 = entityName + ' - Ukraine Tweets'
        description = `Last tweets about ${entityName} and Ukraine. List tweets Ukraine.`
        image = '/ukraine-unity.jpeg'
    } else if (page && page !== 1) {
        let title = 'Ukraine Tweets - page ' + page
        let h1 = 'Ukraine Tweets'
        let description = 'Last tweets about Ukraine. List tweets Ukraine page ' + page + '.'
        let image = '/ukraine-unity.jpeg'
    }

    return (
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <Container style={{maxWidth: '700px'}}>
                <h1>{h1}</h1>
                <EntitiesBar entities={entities} selectedEntityName={entityName} verified={verified}/>
                <TweetsSearchForm verified={verified} entity={entityName}/>
                <PaginationBar base={
                    entityName
                        ? `/tweets/${entityName}`
                        : "/tweets"
                } page={page} pages={pages} query={query}/>
                <div>
                    {tweets.rows.map(tweet =>
                        <TweetItem tweet={tweet} key={tweet.tw_id} entityName={entityName}/>
                    )}
                </div>
                <PaginationBar base={
                    entityName
                        ? `/tweets/${entityName}`
                        : "/tweets"
                } page={page} pages={pages} query={query}/>
            </Container>
        </MainContainer>
    );
};

export default Tweets;

export async function getServerSideProps({params, query}) {
    let entityName = 'All'
    let page = 1
    let verified = query.verified
    if (params.x1 != parseInt(params.x1)) {
        entityName = params.x1
    } else {
        page = parseInt(params.x1)
    }
    //console.log(params)
    let limit = 5

    const ent = await fetch(process.env.API_URL + `/entity/?searchType=Bar`)
    const tw = await fetch(process.env.API_URL + `/tweet/?searchType=Entity&entity=${entityName}&verified=${verified}&page=${page}&limit=${limit}`)
    const entities = await ent.json()
    const tweets = await tw.json()
    return {
        props: {entities, tweets}
    }
}