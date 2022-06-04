import MainContainer from "../components/MainContainer";
import HeadBlock from "../components/HeadBlock";
import React from "react";
import {Container} from "react-bootstrap";

const Index = () => {
    let title = 'Ukraine Tweets'
    let h1 = 'Ukraine Tweets'
    let description = 'Last tweets about Ukraine. List tweets Ukraine.'
    let image = '/ukraine-unity.jpeg'
    return (
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <Container style={{maxWidth: '700px'}}>
                <div className="col-lg-8 my-auto mx-auto text-center">
                    <div>
                        <h1 className="mb-5 mt-5">Ukraine Twitter Analytics</h1>
                        <div>
                            Last tweets about Ukraine. List tweets Ukraine.
                        </div>
                    </div>
                </div>
            </Container>
        </MainContainer>
    );
};

export default Index;