import {useContext} from "react";
import { Button, Col, Row, Stack ,Alert} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { AutoContext } from "./Contextapi/contextapi";
function Register() {
  const [regInfo,userInfo, regUser, regError,listofregLoading]=useContext(AutoContext);
  return (
    <Form onSubmit={regUser}>
      <Row style={{height:"400px", border:"2px cyan solid", background:"skyblue", width:"600px", marginLeft:"26%",textAlign:"center", borderRadius:"10px"}}>
      <Col xs={6}>
      <Stack gap={18}>
        <h2>Register Here to Chat Freely</h2>
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" onChange={(e)=>userInfo({...regInfo,name:e.target.value})} placeholder="Enter your name"/><br/><br/>
        <Form.Label>Email Id:</Form.Label>
        <Form.Control type="email" onChange={(e)=>userInfo({...regInfo,email:e.target.value})} placeholder="Enter your email"/><br/><br/>
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" onChange={(e)=>userInfo({...regInfo,password:e.target.value})} placeholder="Enter your password"/><br/><br/>
        {/* error prompt */}
        {regError?.error && (<Alert varient="danger">
          <p>{regError.msgError}</p>
          </Alert>)}
      <Button variant="primary" type="submit">Register{listofregLoading ? "newUserreg":'Register'}</Button>
      {/* <Alert>Incorrect varient</Alert> */}
      </Stack>
      </Col>
      </Row>
    </Form>
  )
}
 
export default Register;