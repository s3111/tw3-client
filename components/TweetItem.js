import Link from "next/link";
import styles from "../styles/PersonListItem.module.css"
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

        replacePattern4 = /(#?Ukraine)/gim;
        replacedText = inputText.replace(replacePattern4, '<span class="text-success">$1</span>');

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

        return (
            <p dangerouslySetInnerHTML={{__html: replacedText}}></p>
        );
    }
    return(
        <Row key={i.tw_id}>
            <Card className={"my-2 p-3"} style={{maxWidth: '700px'}}>
                <Col>
                    <Row
                        style={{cursor: 'pointer',}}
                        //onClick={() => selectPerson(i)}
                    >
                        <Col xs="auto">
                            <Image style={{borderRadius: '50%'}} width={"48"} height={"48"} alt={name} src={imgSrc}/>
                        </Col>
                        <Col>
                            <Row>
                                    <span
                                        className="font-weight-bold"
                                        //href={TWEETS_ROUTE + '/' + i.name}
                                        style={{cursor: 'pointer',}}
                                        //onClick={() => selectPerson(i)}
                                        //border={i.tw_id === tweet.selectedEntity.id ? 'primary':'light'}
                                    >
                                    {name}
                                    </span>
                            </Row>
                            <Row>
                                <span className="text-secondary text-sm-start" style={{fontSize:'.875rem'}}>@{screen_name}</span>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={"mt-2"}>
                        <Linkify inputText = {i.body} entity={entityName} />
                    </Row>
                    <Row>
                        <time
                            title={`Time Posted: ${new Date(i.tweet_date).toUTCString()}`}
                            dateTime={new Date(i.tweet_date).toISOString()}
                        >
                            {
                                //format(new Date(i.tweet_date), 'h:mm a - MMM d, y')
                                timeAgoTweet(i.tweet_date)
                            }
                        </time>
                    </Row>
                </Col>
            </Card>
        </Row>
    )
}