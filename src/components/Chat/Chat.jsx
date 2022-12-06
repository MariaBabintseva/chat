import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { ListMessages } from "../ListMessages/ListMessages"
import './Chat.css'

export const Chat = () => {
    const [messages, setMessages] = useState(localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : [])
    const [messageText, setMessageText] = useState('')

    window.addEventListener('storage', function (e) {
        setMessages(JSON.parse(localStorage.getItem('messages')));
    })

    const messageTextHandler = (e) => {
        setMessageText(e.target.value)
    }

    const sendMessageHandler = () => {
        const user = JSON.parse(sessionStorage.getItem('user'))
        localStorage.setItem('messages', JSON.stringify([...messages,
        {
            user: user,
            text: messageText,
            date: new Date()
        }
        ]));
        setMessages(JSON.parse(localStorage.getItem('messages')));
        setMessageText('')
    }

    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            sendMessageHandler();
        }
    })

    return (
        <Row className="justify-content-center chat">
            <Col xs={12} sm={11} md={10} lg={8} xl={7}>
                <Row style={{ maxHeight: 'calc(100vh - 70px)', overflowY: 'auto' }}>
                    <ListMessages messages={messages} />
                </Row>
                <Row className="align-items-center flex-row entry-field">
                    <Form.Control
                        style={{ width: '80%' }}
                        id="inlineFormInput"
                        placeholder="Сообщение"
                        value={messageText} onChange={messageTextHandler}
                    />

                    <Button
                        style={{ width: '20%' }}
                        disabled={!messageText}
                        className="mb-2 btn-send"
                        onClick={sendMessageHandler}>
                        <span className="d-none d-sm-block">Отправить</span>
                        <img className="d-block d-sm-none mx-auto" src="assets/img/send.svg" alt="" />
                    </Button>

                </Row>


            </Col>
        </Row>
    )
}