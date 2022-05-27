import Link from "next/link";
import styles from "../styles/TweetItem.module.css"
import {Col, Row,Card} from "react-bootstrap";
import Image from "next/image";
import React from "react";

export default function TweetItem({tweet,entityName,person}){
    let i = tweet
    let imgSrc = i.profile_image_url_https || person.profile_image_url_https
    let name = i.name || person.name
    let screen_name = i.screen_name || person.screen_name


    const timeAgoTweet = (time)=>{
        let timeAgo = ''
        if(time){
            let s = new Date(time)
            if(Date.now() - s > 1000*60*60*48){ // 48 hours
                timeAgo = Math.floor((Date.now() - s)/(1000*60*60*24)) + ' days ago'
            }

            else if(Date.now() - s > 1000*60*60*24){ // 26 hours
                timeAgo = 'yesterday'
            }

            else if(Date.now() - s > 1000*60*60*2){ // > 2 hours
                timeAgo = Math.floor((Date.now() - s)/(1000*60*60)) + ' hrs ago'
            }
            else timeAgo = 'just now'
        }
        return timeAgo
    }
    function Linkify(props) {
        const inputText = props.inputText;
        const entity = props.entity;
        let replacedText, replacePattern1, replacePattern2, replacePattern3, replacePattern4, replacePattern5;

        replacePattern4 = / (#?Ukraine)(\W)/gim;
        replacedText = inputText.replace(replacePattern4, ' <span class="text-success">$1</span>$2');

        if(entity && entity !== 'All'){
            let replace = "([#,@]?" + entity + ")";
            let replacePattern5 = new RegExp(replace,"gim");
            replacedText = replacedText.replace(replacePattern5, '<span class="text-warning">$1</span>');
        }
        replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        replacedText = replacedText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

        replacePattern2 = /@([a-zA-Z0-9\-\_\.]+)+/gim;
        replacedText = replacedText.replace(replacePattern2, '<a href="/person/$1">@$1</a>');

        replacePattern3 = /#([a-zA-Z0-9\-\_\.]+)+/gim;
        replacedText = replacedText.replace(replacePattern3, '<a href="/tweets/$1">#$1</a>');
        console.log({__html: replacedText})
        return (
            <p dangerouslySetInnerHTML={{__html: replacedText}}></p>
        );
    }
    return(
        <Card className={"my-2 p-3"} key={i.tw_id}>
            <Row>
                <Link href={`/person/${screen_name}`}>
                    <a className={styles.linkPerson}>
                        <Row>
                            <Col xs="auto" className={"px-1"}>
                                <Image className={styles.personImg} width={"48"} height={"48"} alt={name} src={imgSrc}/>
                            </Col>
                            <Col className={"px-0"}>
                                <Row>
                                    <Col>
                                        <span className={styles.personName}>{name}</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span className={styles.personScreenName}>@{screen_name}</span>
                                        <span>&nbsp;·&nbsp;</span>
                                        <time className={styles.postTime} title={`Time Posted: ${new Date(i.tweet_date).toUTCString()}`} dateTime={new Date(i.tweet_date).toISOString()}>
                                            {timeAgoTweet(i.tweet_date)}
                                        </time>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </a>
                </Link>
            </Row>
            <Row className={"mt-2"}>
                <Linkify inputText = {i.body} entity={entityName} />
            </Row>
        </Card>
    )
}