import styles from "../styles/TweetsSearchForm.module.css"
import {Card, Row, Col} from "react-bootstrap";
import React, {useState} from "react";
import { useRouter } from 'next/router'

export default function TweetsSearchForm({order,verified,entity}){
    const router = useRouter()
    const handleSubmit = async (event) => {
        event.preventDefault()
        //let order = event.target.order.value
         let verified = event.target.verified.checked ? 1 : 0
        let href = `/tweets/?verified=${verified}`
        if(entity && entity !== 'All') href = `/tweets/${entity}/?verified=${verified}`
        await router.push(href)
    }
     const[newVer, setNewVer] = useState(parseInt(verified) ? true:false)
    //const[newOrder, setNewOrder] = useState(order)
    const handleChangeVerified = (event) => {
        setNewVer(event.target.checked)
    }
    /*
    const handleChangeOrder = (event) => {
        setNewOrder(event.target.value)
        console.log('set', newOrder )
    }
    */

    return(
        <Card>
            <form action="/tweets" method="get" className={styles.tweets} onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <label>
                            <input
                                type="checkbox"
                                onChange={handleChangeVerified}
                                name={'verified'}
                                checked={newVer}
                                label={'verified'}
                            /> only verified
                        </label>
                    </Col>
                </Row>
                <button type="submit">Show</button>
            </form>
        </Card>
    )
}
/*
<Row>
<Col> Order by:
    <label className={styles.followers}>
        <input
            type="radio"
            id="orderFollowers"
            onChange={handleChangeOrder}
            name="order"
            value={"followers"}
            checked={newOrder === 'followers'}
        /> followers
    </label>
    <label className={styles.friends}>
        <input
            type="radio"
            id="orderFriends"
            onChange={handleChangeOrder}
            name="order"
            value={"friends"}
            checked={newOrder === 'friends'}
        /> friends
    </label>
    <label className={styles.statuses}>
        <input
            type="radio"
            id="orderStatuses"
            onChange={handleChangeOrder}
            name="order"
            value={"statuses"}
            checked={newOrder === 'statuses'}
        /> statuses
    </label>
    <label className={styles.statusesUA}>
        <input
            type="radio"
            id="orderStatusesCapt"
            onChange={handleChangeOrder}
            name="order"
            value={"statusesCapt"}
            checked={newOrder === 'statusesCapt'}
        /> statuses UA
    </label>


</Col>
</Row>
<input
type="checkbox"
id="verified"
name="verified"
checked={verified}
onChange={changeFilter}
/>

 */
