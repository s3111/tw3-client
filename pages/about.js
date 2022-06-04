import MainContainer from "../components/MainContainer";
import HeadBlock from "../components/HeadBlock";
import React from "react";
import {Container} from "react-bootstrap";

const Index = () => {
    let title = 'About - Ukraine Tweets'
    let h1 = 'About Ukraine Twitter Analytics'
    let description = 'Sociological research on grouping and clustering of events in the world, automatic ranking of world political figures, detection of political bots on Twitter'
    let image = '/ukraine-unity.jpeg'
    return (
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <Container style={{maxWidth: '700px'}}>
                <div className="col-lg-8 ">
                    <div>
                        <h1 className="mb-5 mt-5">{h1}</h1>
                        <div>
                            <p>
                                This is not a commercial educational project.
                            </p>
                            <p>
                                The objectives are sociological research on the following topics:

                            </p>
                            <ul>
                                <li>grouping and clustering of events in the world;</li>
                                <li>automatic ranking of world political figures;</li>
                                <li>search and detection of political bots on Twitter with the goal of influencing the global political situation.</li>
                            </ul>
                            <p>
                                The project is new and under development. Not all functions may work correctly.
                            </p>
                            <p>
                                The following technologies are currently used in the project:
                                Frontend: NodeJs, NextJS, React Backend: mySQL, ML, NLP.
                            </p>
                            <p>
                                My <a href={"https://www.linkedin.com/in/sergey-vatulev/"}>Linkedin</a> - if you want to offer me a job :)
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </MainContainer>
    );
};

export default Index;