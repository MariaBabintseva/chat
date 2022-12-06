import { useEffect, useRef } from "react"
import { Container } from "react-bootstrap"
import { MessageItem } from "../MessageItem/MessageItem"

import './ListMessages.css'

export const ListMessages = ({ messages }) => {
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "auto" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);


    return (
        <Container className="list-messages">
            {messages?.map((item) =>
                <MessageItem item={item} />
            )}
            <div ref={messagesEndRef} />
        </Container>
    )
}