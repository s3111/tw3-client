import Link from "next/link";
import {Card, Col, Row} from "react-bootstrap";
import React from "react";
import styles from "../styles/HomeEntitiesBar.module.css"

export default function HomeEntitiesBar({entities}) {
    console.log(entities)
    return (
        <div className="mt-3" style={{maxWidth: "700px"}}>
            {entities.map(i =>
                <Card
                    key={i.entityId}
                    className="p-2 m-1 d-inline-block"
                    //style={{cursor: 'pointer'}}
                    border={'light'}
                >
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <Link href={`/tweets/${i.entity}`}>
                                        <a>
                                            {i.entity}
                                        </a>
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className={"text-secondary"}>{i.type.toLowerCase()}</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className={"p-1"}>
                            <Link href={"/report"}>
                                <a className={styles.persent}>
                                    <span >{parseInt((i.weightIndex - 1) * 100)}%</span>
                                </a>
                            </Link>
                        </Col>
                    </Row>
                </Card>
            )}
        </div>
    )
}
{
    /*
                        <svg id="metric-table-decrease-delta-arrow_cache111" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                        <g transform="translate(3, 4.5)">
                            <polygon transform="rotate(-180)" points="0 -4.5 -3.15 -1.2354545 -0.7875 -1.2354545 -0.7875 4.5 0.7875 4.5 0.7875 -1.2354545 3.15 -1.2354545"></polygon>
                        </g>
                    </svg>

     */
}