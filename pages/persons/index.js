import React from "react"
import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";
import {Row, Col, Container, ProgressBar, OverlayTrigger, Tooltip} from "react-bootstrap";
import PersonListItem from "../../components/PersonListItem";
import PaginationBar from "../../components/PaginationBar";
import HeadBlock from "../../components/HeadBlock";
import PersonSearchForm from "../../components/PersonSearchForm";
import {personEmotion, formatter} from "../../utils/common"

const Persons = ({users}) => {
    const {query} = useRouter()
    let page = 1
    let limit = 10
    let order = query.order || 'followers'
    let verified = query.verified
    //const [verified, setVerified] = useState(query.verified)

    const pages = Math.ceil(users.count / limit)

    let title = 'Persons - Ukraine Tweets'
    let h1 = 'Persons - Ukraine Tweets'
    let description = 'Twitter persons list with count tweets about Ukraine'
    let image = 'https://ukraine.web2ua.com/ukraine-unity.jpeg'

    if(verified === '1'){
        title = 'Verified persons - Ukraine Tweets'
        h1 = 'Persons - Ukraine Tweets'
        description = 'Persons list verified by Twitter with count tweets about Ukraine'
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
                        <Row key={user.tw_id} className={"my-3"}>
                            <Col xs={6}>
                                <PersonListItem user = {user}/>
                            </Col>
                            <Col xs={6} >
                                <Row>
                                    <Col
                                        className={"text-right"}
                                        style={{textAlign: 'right'}}
                                    >
                                        {personEmotion(user.average_sentiment)}
                                    </Col>
                                    <Col>
                                        <OverlayTrigger
                                            key={`overlay-${user.tw_id}`}
                                            placement={'top'}
                                            overlay={
                                                <Tooltip id={`tooltip-${user.tw_id}`}>
                                                    <strong>{user.screen_name}</strong><br/>
                                                    Followers: {formatter(user.followers_count)}<br/>
                                                    Friends: {formatter(user.friends_count)}<br/>
                                                    Statuses: {formatter(user.statuses_count)}<br/>
                                                    UA Statuses: {formatter(user.statuses_capt_count)}<br/>
                                                    Sentiment: {user.average_sentiment.toFixed(2)}<br/>
                                                </Tooltip>
                                            }
                                        >
                                            <div>
                                                <ProgressBar
                                                    now={user.followers_count/users.stat.maxFollowers*100}
                                                    variant={'primary'}
                                                    style={{height: '5px'}}
                                                />
                                                <ProgressBar
                                                    now={user.friends_count/users.stat.maxFriends*100}
                                                    variant={'warning'}
                                                    style={{height: '5px'}}
                                                />
                                                <ProgressBar
                                                    now={user.statuses_count/users.stat.maxStatuses*100}
                                                    variant={'info'}
                                                    style={{height: '5px'}}
                                                />
                                                <ProgressBar
                                                    now={user.statuses_capt_count/users.stat.maxStatusesCapt*100}
                                                    variant={'success'}
                                                    style={{height: '5px'}}
                                                />

                                            </div>
                                        </OverlayTrigger>
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

export async function getServerSideProps({params, query}){
    console.log(params, query)
    let order = query.order ?? 'default'
    let verified = query.verified
    let page = 1
    let limit = 10
    const response = await fetch(process.env.API_URL +`/person/?searchType=List&verified=${verified}&order=${order}&page=${page}&limit=${limit}`)
    const data = await response.json()
    const users = data
    return{
        props: {users}
    }
}

{
    /*
                                    <Row>
                                    <Col
                                        className={"text-right"}
                                        style={{textAlign: 'right'}}
                                    >
                                        {formatter(user.followers_count)}
                                    </Col>
                                    <Col
                                        className={"text-right"}
                                        style={{textAlign: 'right'}}
                                    >
                                        {formatter(user.friends_count)}
                                    </Col>

                                </Row>
                                <Row>
                                    <Col
                                        style={{textAlign: 'right'}}
                                    >
                                        {formatter(user.statuses_count)}
                                    </Col>
                                    <Col
                                        className={"text-right font-weight-bold"}
                                        style={{textAlign: 'right'}}
                                    >
                                        {formatter(user.statuses_capt_count)}
                                    </Col>
                                </Row>



                        <Row>
<Col xs={6}>
Person

</Col>
<Col xs={6}>
<Row>
<Col className={"font-weight-bold"}>
followers
</Col>
<Col>
friends
</Col>
</Row>
<Row>
<Col>
statuses
</Col>
<Col>
UA statuses
</Col>
</Row>

</Col>

</Row>

{user.average_sentiment.toFixed(2)}
                                                <ProgressBar
            now={user.average_sentiment}
            max={1}
            min={-1}
            variant={
                user.average_sentiment > 0
                    ? 'success'
                    : 'danger'
            }
            style={{height: '5px'}}
        />

     */
}
