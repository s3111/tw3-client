import Link from "next/link";
import styles from "../styles/A.module.css"
import {Card, Row, Pagination, Container} from "react-bootstrap";
import React from "react";


export default function EntitiesBar({entities,selectedEntityName}){
    return(
        <div className="mt-3" style={{maxWidth: "700px"}}>
            <div className="p-2 font-weight-bold d-inline-block">Entities: </div>
            <Card
                key={'All'}
                className="p-2 d-inline-block"
                style={{cursor: 'pointer', }}
                //onClick={()=> tweet.setSelectedEntity({})}
                //onClick={() => selectEntity({})}
                border={selectedEntityName === 'All' ? 'primary':'light'}
            >
                <Link  href={`/tweets`}>
                    All
                </Link>
            </Card>
            {entities.map(i =>
                    <Card
                        key={i.id}
                        className="p-2 d-inline-block"
                        style={{cursor: 'pointer'}}
                        border={i.name === selectedEntityName ? 'primary':'light'}
                    >
                        <Link  href={`/tweets/${i.name}`}>
                            {i.name}
                        </Link>
                    </Card>
            )}
        </div>
   )
}