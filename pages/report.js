import React from "react"
//import {useRouter} from "next/router";
import MainContainer from "../components/MainContainer";
import {Container} from "react-bootstrap";
import HeadBlock from "../components/HeadBlock";
import Chart from "react-google-charts";
const Stat = ({stat}) => {
    let title = 'Ukraine Tweets Reports'
    let h1 = 'Reports - Ukraine Tweets'
    let description = 'Twitter persons list with count tweets about Ukraine'
    let image = '/ukraine-unity.jpeg'
    console.log('stat',stat)
    const options = {
        title: "Tweets per day",
        height: 300,
        legend: { position: "none" },
    };

    return (
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <Container style={{maxWidth: '700px'}}>
                <h1>{h1}</h1>
                {Object.keys(stat.charts).map((t,k) =>
                    <Chart
                        key={k}
                        //className={"mt-2"}
                        //chartType="ScatterChart"
                        chartType="AreaChart"
                        //chartType="Bar"
                        data={stat.charts[t]}
                        width="100%"
                        height="300px"
                        options={{
                            title: t,
                            height: 300,
                            //legend: { position: "none" },
                            //vAxis: { maxValue: 2500 },
                        }}
                        //legendToggle
                    />
                )}

                {
                    /*
                <div>Persons: {stat.persons ? stat.persons : 0}</div>
                <div>Tweets: {stat.tweets ? stat.tweets : 0}</div>
                <div>Entities: {stat.entities ? stat.entities : 0}</div>
                <div>Tweets entities: {stat.tweetEntities ? stat.tweetEntities : 0}</div>


                     */
                }
            </Container>
        </MainContainer>
    );
};

export default Stat;

export async function getServerSideProps({params}){
    const response = await fetch(process.env.API_URL +`/stat/entities`)
    const stat = await response.json()
    return{
        props: {stat}
    }
}