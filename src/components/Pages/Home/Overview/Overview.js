import React from 'react';
import Container from 'react-bootstrap/Container';
import './Overview.css';

const Overview = () => {
    return (
        <Container className='services text-center my-5'>
            <h1 className='fs-1 fw-bold font-monospace'>Our Cleaning <span>Services</span></h1>
            <p className='text-muted fw-lighter'>Let us use our years of experience, skilled employees, and advanced procedures to ensure a clean and healthy environment for your employees, customers and guests.</p>
        </Container>
    );
};

export default Overview;