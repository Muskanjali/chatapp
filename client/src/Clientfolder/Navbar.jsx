import React, { useContext } from 'react';
// import { BsChatHeartFill } from "react-icons/bs";
import { Container, Stack, Navbar ,Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { AutoContext } from './Contextapi/contextapi';
const NavBar = () => {
    const {user,logoutUser}=useContext(AutoContext);
    return ( 
        <Navbar style={{height:"3.6rem", background:"skyblue", border:"2px solid transparent"}}>
         <Container>
            <Link to="/">Chat</Link>
            <Nav>
                <Stack direction="horizontal" gap="10">
                    <Link to="/register" style={{marginLeft:"70%"}}>Register</Link>
                    <Link to="/login" style={{marginLeft:"20%"}}>Login</Link>
                </Stack>
            </Nav>
         </Container>
        </Navbar>
     );
}
 
export default NavBar;