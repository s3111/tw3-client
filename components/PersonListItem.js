import Link from "next/link";
import styles from "../styles/PersonListItem.module.css"
import {Col, Row} from "react-bootstrap";
import Image from "next/image";
import React from "react";

export default function PersonListItem({user}){
    return(
        <Link href={`/person/${user.screen_name}`}>
            <a>
                <Row>
                    <Col xs="auto">
                        <Image width={"48"} height={"48"} alt={user.name} className={styles.personImg} src={user.profile_image_url_https}/>
                    </Col>
                    <Col>
                        <Row>
                            <span className={styles.personName}>
                               {user.name}
                            </span>
                        </Row>
                        <Row>
                            <span className={styles.personScreenName}>@{user.screen_name}</span>
                        </Row>
                    </Col>
                </Row>
            </a>
        </Link>
    )
}