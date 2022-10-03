import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FcHome } from "react-icons/fc";
import {FcContacts} from"react-icons/fc";


function Nav1() {
    return (
        <div>
            <Navbar bg="danger" variant="dark">
                <Container>
                    <Nav className="me-auto">
                    
                        <Link to="/" className='p-3 text-light link'><FcHome className='mb-1 mx-1'size={30}/>Home</Link>
                        <Link to="/contacto" className='p-3 text-light link'><FcContacts className='mb-1 mx-1'size={30}/>Contacto</Link>
                    </Nav>
                    <Navbar.Brand href="#home"><img src="https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-large/1f370@2x.png" width={30}/>Happy Cake</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nav1