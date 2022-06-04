import MainContainer from "../components/MainContainer";
import HeadBlock from "../components/HeadBlock";
import React from "react";
import {Container} from "react-bootstrap";

const Index = () => {
    let title = 'Ukraine Tweets'
    let h1 = 'Ukraine Twitter Analytics'
    let description = 'Last tweets about Ukraine. List tweets Ukraine.'
    let image = '/ukraine-unity.jpeg'
    return (
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <Container style={{maxWidth: '700px'}}>
                <div className="col-lg-8 my-auto mx-auto text-center">
                    <div>
                        <h1 className="mb-5 mt-5">{h1}</h1>
                        <div>
                            <p className="mt-3">
                                Last tweets about Ukraine.
                            </p>
                            <p className="mt-3">
                                The purpose of the project:<br/>
                                grouping events in the world,<br/>
                                rating of world political figures,<br/>
                                detection of political bots on Twitter.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </MainContainer>
    );
};

export default Index;