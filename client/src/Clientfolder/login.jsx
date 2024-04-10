import React from 'react';
import { Row, Col, Stack,Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const Login = () => {
    return ( 
        <Form>
      <Row style={{height:"300px", border:"2px cyan solid", background:"skyblue", width:"600px", marginLeft:"26%",textAlign:"center", borderRadius:"10px"}}>
      <Col xs={6}>
      <Stack gap={18}>
        <h2>Login Here to open your Chatters account</h2>
        <Form.Label>Email Id:</Form.Label>
        <Form.Control type="email" placeholder="Enter your email"/><br/><br/>
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password"/><br/><br/>
      <Button variant="primary" type="submit">Login</Button>
      {/* <Alert>Incorrect varient</Alert> */}
      </Stack>
      </Col>
      </Row>
        </Form>
     );
}
 
export default Login;