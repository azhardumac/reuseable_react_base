import React from 'react';
import './Navbar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


import { Link } from 'react-router-dom';



const NavBar = () => {
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Base Theme</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <ButtonGroup className='mt-2 mb-2'>
          <Button as={Link} to="/login" >Login</Button>
          <Button as={Link} to="/signup" variant="outline-primary">SignUp</Button>
          </ButtonGroup>
        </Container>
      </Navbar>
    </>
    );

    }

export default NavBar;