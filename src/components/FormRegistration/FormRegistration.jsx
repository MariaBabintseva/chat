import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import './FormRegistration.css'

export const FormRegistration = ({ setUser }) => {
    const [name, setName] = useState('')


    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const registrationHandler = () => {
        sessionStorage.setItem('user', JSON.stringify({ id: new Date().toISOString(), name: name }));
        setUser({ id: new Date().toISOString(), name: name })
    }

    console.log(name);

    return (
        <>
            <Row className="justify-content-center align-items-center vh-100">
                <Col className="form-registration p-5" xs={11} sm={10} md={8} lg={6} xl={5}>
                    <Form onSubmit={registrationHandler}>
                        <Row className="align-items-center">
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Введите имя"
                                value={name} onChange={nameHandler}
                            />
                        </Row>
                        <Row className="align-items-center">
                            <Button type="submit" className="mb-2">
                                Зарегистрироваться
                            </Button>
                        </Row>

                    </Form>
                </Col>
            </Row>
        </>
    );
}
