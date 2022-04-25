import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe('pk_test_51IhuABD4bG2KrznN6G9qymWo9qM6yo8CzOm8evK9ubKWvT2PG4z1jw37xbdA7vyIguPd9GYeSzJfhcVuIPwtKIoj00eW9mNYDw');

const Payment = () => {
    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/oder/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id]);
    // console.log(service);
    return (
        <div className='py-2'>
            <div className="pb-2">
                <h3 className='fw-bold font-monospace'>Your ordered service Payment system</h3>
                <hr />
                <div className="container">
                    <h2 className='fw-bold font-monospace'>Please Pay For {service.name} for {service.productName} </h2>
                    <h4 className='fw-bold font-monospace'>Pay $ {service.price} </h4>
                </div>
                <div className="py-1">
                    <Elements stripe={stripePromise}>
                        <CheckoutFrom service={service} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;