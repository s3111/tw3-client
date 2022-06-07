import Link from "next/link";
import {Card} from "react-bootstrap";
import React from "react";

export default function EntitiesBar({entities, selectedEntityName, verified}) {
    let queryAdd = ''
    if (verified && parseInt(verified) === 1) queryAdd = '/?verified=1'
    return (
        <div className="mt-3" style={{maxWidth: "700px"}}>
            <Card
                key={'All'}
                className="p-2 d-inline-block"
                style={{cursor: 'pointer',}}
                border={selectedEntityName === 'All' ? 'primary' : 'light'}
            >
                <Link href={`/tweets${queryAdd}`}>
                    Ukraine
                </Link>
            </Card>
            {entities.map(i =>
                <Card
                    key={i.id}
                    className="p-2 d-inline-block"
                    style={{cursor: 'pointer'}}
                    border={i.name === selectedEntityName ? 'primary' : 'light'}
                >
                    <Link href={`/tweets/${i.name}${queryAdd}`}>
                        {i.name}
                    </Link>
                </Card>
            )}
        </div>
    )
}