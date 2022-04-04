import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const NavbarTop = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand >
                    <Link className='text-decoration-none' to='/home'>Clean</Link>
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link>
                        <Link className='text-decoration-none' to='/home'>Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className='text-decoration-none' to='/home'>Services</Link></Nav.Link>
                    <Nav.Link>
                        <Link className='text-decoration-none' to='/home'>About</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className='text-decoration-none' to='/home'>Contact us</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;