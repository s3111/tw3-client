import Link from "next/link";
import styles from "../styles/PersonListItem.module.css"
import {Col, Row} from "react-bootstrap";
import Image from "next/image";
import React from "react";

export default function PersonListItem({user}){
    //console.log(user)
    {
        /*

         */
    }
    return(
        <Link href={`/person/${user.screen_name}`}>
            <a>
                <Row>
                    <Col xs="auto">
                        <Image width={"48"} height={"48"} alt={user.name} style={{borderRadius: '50%'}} src={user.profile_image_url_https}/>
                    </Col>
                    <Col>
                        <Row>
                            <span className="font-weight-bold">
                               {user.name}
                            </span>
                        </Row>
                        <Row>
                            <span className="text-secondary text-sm-start" style={{fontSize:'.875rem'}}>@{user.screen_name}</span>
                        </Row>
                    </Col>
                </Row>
            </a>
        </Link>
    )
}