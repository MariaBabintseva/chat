import { Col, Row } from "react-bootstrap"
import './MessageItem.css'

export const MessageItem = ({ item }) => {
    const myName = JSON.parse(sessionStorage.getItem('user'))

    const formatDate = (dateValue) => {
        const date = new Date(dateValue)

        const time = [
            addZero(date?.getHours()),
            addZero(date?.getMinutes())
        ].join(':')

        function addZero(val) {
            if (val < 10) {
                return '0' + val;
            }
            return val;
        };


        return time
    }

    return (
        <>
            <Row className={`message-item ${item.user.id === myName.id ? 'send' : 'receive'}`}>
                <Col lg='12'>
                    {item.user.id !== myName.id
                        && <Row className="user-name">{item.user.name}</Row>
                    }
                    <Row>
                        <span className="text-message">{item.text}</span>
                        <span className="date-message">{formatDate(item?.date)}</span>
                    </Row>
                </Col>

            </Row>
        </>


    )
}