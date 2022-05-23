import {useRouter} from "next/router";
import styles from "../../styles/user.module.scss"
import MainContainer from "../../components/MainContainer";
import HeadBlock from "../../components/HeadBlock";
import React from "react";
import {Col, Container, Pagination, Row} from "react-bootstrap";
export default function User(person){
    const {query} = useRouter()

    let title = 'Person Ukraine Tweets'
    let h1 = 'Person Ukraine Tweets'
    let description = ''
    let image = '/ukraine-unity.jpeg'

    if(person.name)  {
        h1 = person.name + ' - ' + h1
        title = `${person.name} - Ukraine Tweets`
        description = `@${person.screen_name} ${person.description} ${person.location}`
        image = person.profile_banner_url ? person.profile_banner_url : '/ukraine-unity.jpeg'
    }
    let p = person

    return(
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <h1>{h1}</h1>
            <Row className="mt-2">
                <Col>
                    {p.name
                        ?
                        <div>
                            {
                                /*
                            <h1 style={{fontSize: '18px'}}>{tweet.selectedPerson.name}</h1>
                            <h1 style={{fontSize: '16px'}}>@{tweet.selectedPerson.screen_name}</h1>
                                */
                            }
                            <Row>
                                <Col style={{
                                    backgroundImage: `url(${p.profile_banner_url})`,
                                    //width:'100%',
                                    height:'300px',
                                    //backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                }}>

                                </Col>
                            </Row>
                            <Row className={"mt-2"} xs={1} sm={2}>
                                <Col>
                                    <Row
                                        style={{cursor: 'pointer',}}
                                        //onClick={() => selectPerson(i)}
                                    >
                                        <Col xs="auto">
                                            <img style={{borderRadius: '50%'}} src={p.profile_image_url_https}/>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <span className="font-weight-bold"><h1>{p.name}</h1> </span>
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
                                    {p.followers_count ? 'Followers: ' + p.followers_count : null}
                                </Col>
                                <Col>
                                    {p.statuses_count ? 'Statuses: ' + p.statuses_count : null}
                                </Col>
                            </Row>
                            <Row className={"mt-2"}>
                                <Col>
                                    {p.friends_count ? 'Friends: ' + p.friends_count : null}
                                </Col>
                                <Col>
                                    {p.favourites_count ? 'Favourites: ' + p.favourites_count : null}
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    {p.description ? p.description : null}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {p.location ? 'Location: ' + p.location : null}
                                </Col>
                            </Row>

                        </div>
                        :
                        <div>
                            <h1 style={{fontSize: '18px'}}>{h1}</h1>
                            Looks like we have no information about {person}<br />
                            You can try open it in&nbsp;
                            <a
                                href={"https://twitter.com/" + person}
                                target={"_blank"}
                            >Twitter</a>
                        </div>
                    }
                    <div className={"mt-5"}>
                        Back to <span
                        onClick={() => history.back()}
                        className={'text-primary'}
                        style={{cursor:'pointer'}}
                    >previous page</span>
                    </div>

                    {
                        /*
                        <PersonTweetsList/>
                    <Footer/>
                        <Pages/>
                    <PersonsList/>
                    <Pages/>
                        <EntitiesBar/>


                    <Pages/>

                    <ZoneBar/>
                    <ServersList/>

                    <Footer/>

                         */
                    }

                </Col>
            </Row>
        </MainContainer>
    )
}
export async function getServerSideProps({params}){
    const response = await fetch(`https://ukraine.web2ua.com/api/person/${params.id}?searchType=All`)
    const person = await response.json()
    console.log(person)
    //const users = data.rows
    return{
        props: person
    }
}