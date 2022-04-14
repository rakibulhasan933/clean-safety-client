import React from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import NavbarTop from '../NavbarTop/NavbarTop';

const Checkout = () => {
    const { id } = useParams();
    return (
        <Container>
            <NavbarTop />
            <div className="py-3">
                <h1>Hello Product   {id}</h1>
            </div>
        </Container>
    );
};

export default Checkout;