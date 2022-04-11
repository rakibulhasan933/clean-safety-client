import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const NavbarTop = () => {
    const { user, logout } = useAuth();
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
                    <Button variant="outline-primary"><Link to='/login'>Login</Link></Button>
                    {user?.email && <Button variant="outline-primary" onClick={logout} >Log out</Button>}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;