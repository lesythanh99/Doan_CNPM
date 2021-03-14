import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
function Login(){
    return (
        <>
            <Container fluid = {true}>
                <Row>
                    <Col>
                        <div>
                            <div>

                            </div>
                            <div>
                                <div>
                                    <Form>
                                        <FormGroup>
                                            <Input type = 'text'></Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type = 'text'></Input>
                                        </FormGroup>
                                    </Form>
                                    <Button>Đăng Nhập</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Login;