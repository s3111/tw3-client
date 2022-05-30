import Link from "next/link";
import styles from "../styles/PersonListItem.module.css"
import {Col, Row} from "react-bootstrap";
import Image from "next/image";
import React from "react";

export default function PersonListItem({user}){
    return(
            <Link href={`/person/${user.screen_name}`} >
                <a className={styles.linkPerson}>
                    <Row>
                        <Col xs="auto" className={"pl-1"}>
                            <Image width={"48"} height={"48"} alt={user.name} className={styles.personImg} src={user.profile_image_url_https}/>
                        </Col>
                        <Col className={styles.overFlow}>
                            <Row className={styles.personName}>
                                <Col className={"mx-0 px-0"}>
                                    {user.name}{user.verified ? <span>&nbsp;&#x00AE;</span> : null}
                                </Col>
                            </Row>
                            <Row className={styles.personScreenName}>
                                <Col className={"mx-0 px-0"}>
                                    @{user.screen_name}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </a>
            </Link>
    )
}