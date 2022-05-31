import React from "react"
//import {useRouter} from "next/router";
import MainContainer from "../components/MainContainer";
import {Container} from "react-bootstrap";
import HeadBlock from "../components/HeadBlock";
const Stat = ({stat}) => {
    console.log(stat)
    console.log(stat.tweets)
    //const {query} = useRouter()
    let title = 'Ukraine Tweets Statistic'
    let h1 = 'Statistic - Ukraine Tweets'
    let description = 'Twitter persons list with count tweets about Ukraine'
    let image = '/ukraine-unity.jpeg'

    return (
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <Container style={{maxWidth: '700px'}}>
                <h1>{h1}</h1>
                <div>Persons: {stat.persons ? stat.persons : 0}</div>
                <div>Tweets: {stat.tweets ? stat.tweets : 0}</div>
                <div>Entities: {stat.entities ? stat.entities : 0}</div>
                <div>Tweets entities: {stat.tweetEntities ? stat.tweetEntities : 0}</div>
                {
                    /*
                <Chart
                    chartType="ScatterChart"
                    data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                    width="100%"
                    height="400px"
                    legendToggle
                />
                     */
                }
            </Container>
        </MainContainer>
    );
};

export default Stat;

export async function getServerSideProps({params}){
    const response = await fetch(process.env.API_URL +`/stat`)
    const stat = await response.json()
    return{
        props: {stat}
    }
}