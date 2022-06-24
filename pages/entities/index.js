import React from "react"
//import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";
import {Row, Col, Container} from "react-bootstrap";
import PaginationBar from "../../components/PaginationBar";
import HeadBlock from "../../components/HeadBlock";
import EntitiesTypesBar from "../../components/EntitiesTypesBar";
import EntityItem from "../../components/EntityItem";
//import Link from "next/link";

const Entities = ({entities, entitiesTypes}) => {
    //const {query} = useRouter()
    let page = 1
    let limit = 20
    const pages = Math.ceil(entities.count / limit)

    let title = 'Ukraine Tweets'
    let h1 = 'Ukraine Tweets'
    let description = 'Last tweets about Ukraine. List tweets Ukraine.'
    let image = '/ukraine-unity.jpeg'

    return (
        <MainContainer>
            <HeadBlock description={description} image={image} title={title}/>
            <Container style={{maxWidth: '700px'}}>
                <h1>{h1}</h1>
                <EntitiesTypesBar types={entitiesTypes} selectedEntityName={"All"}/>
                <PaginationBar base={"/entities"} page={page} pages={pages}/>
                <div>
                    <Row>
                        <Col><b>Entity</b></Col>
                        <Col><b>Type</b></Col>
                        <Col xs={"2"}><b>Tweets</b></Col>
                    </Row>
                    {entities.rows.map(entity =>
                        <EntityItem entity={entity} key={entity.id}/>
                    )}
                </div>
                <PaginationBar base={"/entities"} page={page} pages={pages}/>
            </Container>
        </MainContainer>
    );
};

export default Entities;

export async function getServerSideProps({params}) {
    console.log(params)
    let page = 1
    let limit = 20
    let name = 'All'
    console.log('utl', process.env.API_URL)
    const ent = await fetch(process.env.API_URL + `/entity?searchType=List&name=${name}&page=${page}&limit=${limit}`)
    const types = await fetch(process.env.API_URL + `/entity/types?searchType=All`)
    const entities = await ent.json()
    const entitiesTypes = await types.json()
    return {
        props: {entities, entitiesTypes}
    }
}