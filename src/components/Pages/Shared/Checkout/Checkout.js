import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavbarTop from '../NavbarTop/NavbarTop';

const Checkout = () => {
    const [service, setService] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [id]);
    const { name, price, description, imageURL } = service;

    return (
        <Container>
            <NavbarTop />
            <div className="row py-5">
                <div className="col-md-5 px-2">
                    <h1> hello customer</h1>
                </div>
                <div className="col-md-5">
                    <div className="card h-80 shadow-lg p-3 mb-5 bg-body rounded">
                        <img src={imageURL} className="card-img-top img-fluid  rounded " alt="carpet" />
                        <div className="card-body">
                            <h4 className="card-title fs-4 fw-bold font-monospace">{name} </h4>
                            <p className="card-text fw-lighter font-monospace text-muted">{description}</p>
                            <h5 className='fs-6 fw-bold font-monospace'>Price: $ {price} </h5>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    );
};

export default Checkout;