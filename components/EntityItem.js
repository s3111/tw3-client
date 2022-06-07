import Link from "next/link";
import styles from "../styles/PersonListItem.module.css"
import {Col, Row} from "react-bootstrap";
import Image from "next/image";
import React from "react";

export default function EntityItem({entity}){
    return(
        <Row key={entity.id}>
            <Col>
                <Link href={`/tweets/${entity.name}`}>
                    <a>
                       {entity.name}
                    </a>
                </Link>
            </Col>
            <Col>
                <Link href={`/entities/${entity.type}`}>
                    <a>
                        {entity.typeName}
                    </a>
                </Link>
            </Col>
            <Col xs={"2"}>
                        {entity.count}
            </Col>
        </Row>
    )
}