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
    console.log("navbar", user)
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
                        <Link className='text-decoration-none' to='/services'>Services</Link></Nav.Link>
                    <Nav.Link>
                        <Link className='text-decoration-none' to='/dashboard'>Dashboard</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className='text-decoration-none' to='/home'>About</Link>
                    </Nav.Link>
                    {user.email ? <Button variant="outline-primary" onClick={logout}>Log out </Button> : <Button variant="outline-primary"><Link style={{ textDecoration: 'none' }} to='/login'>Login <FontAwesomeIcon icon={faArrowRight} /></Link></Button>}
                    <Nav.Link>
                        <Link className='text-decoration-none' to='/'><img className='profile-pic' src={user.photoURL} alt="profile" /></Link>
                    </Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;