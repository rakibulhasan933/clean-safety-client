import React from 'react';
import './NavbarTop.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const NavbarTop = () => {
    const { user, logout } = useAuth() || {};
    // console.log("navbar", user)
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand >
                    <Link className=' font-monospace text-decoration-none' to='/'>Clean</Link>
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link>
                        <Link className='font-monospace text-decoration-none' to='/'>Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className='text-decoration-none font-monospace' to='/services'>Services</Link></Nav.Link>
                    <Nav.Link>
                        <Link className='text-decoration-none font-monospace' to='/dashboard'>Dashboard</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className='text-decoration-none font-monospace' to='/'>About</Link>
                    </Nav.Link>
                    {user.email ? <Button variant="outline-primary font-monospace" onClick={logout}>Log out </Button> : <Button variant="outline-primary login-button"><Link style={{ textDecoration: 'none' }} to='/login'>Login <FontAwesomeIcon icon={faArrowRight} /></Link></Button>}
                    {user?.email && <Nav className='mx-1'>
                        <img className='profile-pic' src={user.photoURL} alt="profile" />
                    </Nav>}

                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;