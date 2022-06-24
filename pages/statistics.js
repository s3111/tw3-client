import React from "react"
import MainContainer from "../components/MainContainer";
import {Container} from "react-bootstrap";
import HeadBlock from "../components/HeadBlock";
import Chart from "react-google-charts";

const Stat = ({stat}) => {
    let title = 'Ukraine Tweets Statistic'
    let h1 = 'Statistic - Ukraine Tweets'
    let description = 'Twitter persons list with count tweets about Ukraine'
    let image = '/ukraine-unity.jpeg'
    const options = {
        title: "Tweets per day",
        height: 300,
        legend: {position: "none"},
    };

    return (
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <Container style={{maxWidth: '700px'}}>
                <h1>{h1}</h1>
                <div>Persons: {stat.persons ? stat.persons : 0}</div>
                <div>Tweets: {stat.tweets ? stat.tweets : 0}</div>
                <div>Entities: {stat.entities ? stat.entities : 0}</div>
                <div>Tweets entities: {stat.tweetEntities ? stat.tweetEntities : 0}</div>
                <Chart
                    chartType="Bar"
                    data={[["Day", "Tweets"], ...stat.timeFrames.tweets]}
                    width="100%"
                    height="300px"
                    options={options}
                    legendToggle
                />
            </Container>
        </MainContainer>
    );
};

export default Stat;

export async function getServerSideProps({params}) {
    const response = await fetch(process.env.API_URL + `/stat`)
    const stat = await response.json()
    return {
        props: {stat}
    }
}