import React from 'react'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
//import loginIcon from '../../images/user.svg'
//import uiImg from '../../images/login.svg';

export default function Login() {
    return (
        <>
        <Container className="mt-20">

        
        <Row>
            <Col lg={4} md={8} sm={12} className="text-center mt-10 p-13" style={{marginTop:35,marginLeft:300}}>
            <h1 className="text-center mt-5 p-13">Login</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary btn-block" type="submit">Login</Button>

                    </Form>
            </Col>

            
        </Row>
    </Container>
        </>
    )
}
