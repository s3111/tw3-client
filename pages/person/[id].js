import {useRouter} from "next/router";
//import styles from "../../styles/user.module.scss"
import MainContainer from "../../components/MainContainer";
import HeadBlock from "../../components/HeadBlock";
import React from "react";
import {Col, Container, Pagination, Row} from "react-bootstrap";
import TweetItem from "../../components/TweetItem";
import {personEmotion, formatter} from "../../utils/common";

export default function User({person,tweets}){
    const {query} = useRouter()

    let title = 'Person Ukraine Tweets'
    let h1 = 'Person Ukraine Tweets'
    let description = ''
    let image = '/ukraine-unity.jpeg'

    if(person.name)  {
        h1 = person.name + ' - ' + h1
        title = `${person.name} - Ukraine Tweets`
        description = '@' + person.screen_name +' ' + (person.description ? person.description : '') + (person.location ? person.location : '')
        image = person.profile_banner_url ? person.profile_banner_url : '/ukraine-unity.jpeg'
    }
    let p = person

    return(
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <Container style={{maxWidth: '700px'}}>
                <h1>{h1}</h1>
                <Row className="mt-2">
                    <Col>
                        {p.name
                            ?
                            <div>
                                <Row>
                                    <Col style={{
                                        backgroundImage: `url(${p.profile_banner_url})`,
                                        height:'300px',
                                        backgroundSize: 'cover',
                                    }}>
                                    </Col>
                                </Row>
                                <Row className={"mt-2"} xs={1} sm={2}>
                                    <Col>
                                        <Row
                                            style={{cursor: 'pointer',}}
                                        >
                                            <Col xs="auto">
                                                <img style={{borderRadius: '50%'}} src={p.profile_image_url_https}/>
                                            </Col>
                                            <Col>
                                                <Row>
                                                    <span className="font-weight-bold">{p.name}</span>
                                                </Row>
                                                <Row>
                                                    <span className="text-secondary text-sm-start" style={{fontSize:'.875rem'}}>@{p.screen_name}</span>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className={"mt-2"}>
                                    <Col>
                                        {p.description ? p.description : null}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {p.location ? 'Location: ' + p.location : null}
                                    </Col>
                                </Row>

                                <Row className={"mt-2"}>
                                    <Col>
                                        {p.followers_count ? 'Followers: ' + formatter(p.followers_count) : null}
                                    </Col>
                                    <Col>
                                        {p.statuses_count ? 'Statuses: ' + formatter(p.statuses_count) : null}
                                    </Col>
                                    <Col>
                                        {tweets.count ? 'UA Statuses: ' + formatter(tweets.count) : null}
                                    </Col>
                                </Row>
                                <Row className={"mt-2"}>
                                    <Col>
                                        {p.friends_count ? 'Friends: ' + formatter(p.friends_count) : null}
                                    </Col>
                                    <Col>
                                        {p.favourites_count ? 'Favourites: ' + formatter(p.favourites_count) : null}
                                    </Col>
                                    <Col>
                                        {p.average_sentiment ? <span>Avg sentiment: {personEmotion(p.average_sentiment)}</span> : null}
                                    </Col>
                                </Row>

                            </div>
                            :
                            <div>
                                <h1 style={{fontSize: '18px'}}>{h1}</h1>
                                Looks like we have no information about {query.id}<br />
                                You can try open it in&nbsp;
                                <a
                                    href={"https://twitter.com/" + query.id}
                                    target={"_blank"}
                                >Twitter</a>
                            </div>
                        }
                        {
                            /*
                        <div className={"mt-5"}>
                            Back to <span
                            onClick={() => history.back()}
                            className={'text-primary'}
                            style={{cursor:'pointer'}}
                        >previous page</span>
                        </div>

                             */
                        }

                    </Col>
                </Row>
                <div className={"mt-4"}>
                    {tweets.rows?
                        tweets.rows.map(tweet =>
                            <TweetItem tweet = {tweet} key={tweet.tw_id} person={person}/>
                        )
                        : <span>Looks like we do not have any tweets from this person yet.</span>
                    }
                </div>
            </Container>
        </MainContainer>
    )
}
export async function getServerSideProps({params}){
    const pers = await fetch(process.env.API_URL +`/person/${params.id}?searchType=All`)
    const person = await pers.json()
    let tweets = {}
    if(person.tw_id){
        let page = 1
        let limit = 10
        let tw = await fetch(process.env.API_URL +`/tweet?searchType=Person&entity=${person.tw_id}&page=${page}&limit=${limit}`)
        tweets = await tw.json()
    }

    //console.log(tweets)
    //const users = data.rows
    return{
        props: {person, tweets}
    }
}