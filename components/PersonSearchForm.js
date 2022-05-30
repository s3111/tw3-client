import styles from "../styles/PersonSearchForm.module.css"
import {Card, Row, Col} from "react-bootstrap";
import React, {useState} from "react";
import { useRouter } from 'next/router'

export default function PersonSearchForm({order,verified}){
    const router = useRouter()
    const handleSubmit = async (event) => {
        event.preventDefault()
        let order = event.target.order.value
        //let order = 'followers'
        let verified = event.target.verified.checked ? 1 : 0
        let href = `/persons/?order=${order}&verified=${verified}`
        await router.push(href)
    }
    //const handleChange = ({target: { name, checked }}) => this.setState({[name]: checked});
    const[newVer, setNewVer] = useState(parseInt(verified) ? true:false)
    const[newOrder, setNewOrder] = useState(order)
    const handleChangeVerified = (event) => {
        setNewVer(event.target.checked)
    }
    const handleChangeOrder = (event) => {
        //console.log('change', newVer, event, event.target.checked )
        setNewOrder(event.target.value)
        console.log('set', newOrder )
    }

    return(
        <Card>
            <form action="/persons" method="get" className={styles.persons} onSubmit={handleSubmit}>
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

                {
                    /*
                <input
                    type="checkbox"
                    id="verified"
                    name="verified"
                    checked={verified}
                    onChange={changeFilter}
                />

                     */
                }



                <button type="submit">Show</button>
            </form>
        </Card>
    )
}