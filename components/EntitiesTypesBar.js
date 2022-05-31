import Link from "next/link";
import styles from "../styles/A.module.css"
import {Card, Row, Pagination, Container} from "react-bootstrap";
import React from "react";


export default function EntitiesTypesBar({types,selectedTypeName}){
    return(
        <div className="mt-3" style={{maxWidth: "700px"}}>
            {
                /*
            <div className="p-2 font-weight-bold d-inline-block">Types: </div>
                 */
            }

            <Card
                key={'All'}
                className="p-2 d-inline-block"
                style={{cursor: 'pointer', }}
                //onClick={()=> tweet.setSelectedEntity({})}
                //onClick={() => selectEntity({})}
                border={selectedTypeName === 'All' ? 'primary':'light'}
            >
                <Link  href={`/entities`}>
                    All
                </Link>
            </Card>
            {types.map(i =>
                <Card
                    key={i.id}
                    className="p-2 d-inline-block"
                    style={{cursor: 'pointer'}}
                    border={i.name === selectedTypeName ? 'primary':'light'}
                >
                    <Link  href={`/entities/${i.type}`}>
                        {i.name}
                    </Link>
                </Card>
            )}
        </div>
    )
}