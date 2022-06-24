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
                    //className={"p-2 pr-3 m-1 d-inline-block " + styles.card}
                    className={"d-inline-block m-2 p-2 px-3"}
                >
                    <Row>
                        <Col>
                            <Row>
                                <Col className={styles.entity}>
                                    <Link href={`/tweets/${i.entity}`}>
                                        <a>
                                            {i.entity}
                                        </a>
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={styles.type}>
                                    <div>
                                        <Link href={`/entities/${i.type}`}>
                                            <a>
                                                {i.type.toLowerCase()}
                                            </a>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className={"p-1"}>
                            <Link href={"/report"}>
                                <a className={styles.persent}>
                                    <span>{parseInt((i.weightIndex - 1) * 100)}%</span>
                                </a>
                            </Link>
                        </Col>
                    </Row>
                </Card>
            )}
        </div>
    )
}
