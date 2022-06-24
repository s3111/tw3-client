import styles from "../styles/TweetsSearchForm.module.css"
import {Card, Row, Col} from "react-bootstrap";
import React, {useState} from "react";
import {useRouter} from 'next/router'

export default function TweetsSearchForm({order, verified, entity}) {
    const router = useRouter()
    const handleSubmit = async (event) => {
        event.preventDefault()

        let verified = event.target.verified.checked ? 1 : 0
        let href = `/tweets/?verified=${verified}`
        if (entity && entity !== 'All') href = `/tweets/${entity}/?verified=${verified}`
        await router.push(href)
    }
    const [newVer, setNewVer] = useState(parseInt(verified) ? true : false)
    const handleChangeVerified = (event) => {
        setNewVer(event.target.checked)
    }

    return (
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
