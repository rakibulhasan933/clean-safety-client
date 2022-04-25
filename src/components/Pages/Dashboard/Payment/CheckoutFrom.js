import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './common.css';

const CheckoutFrom = ({ service }) => {
    const { price } = service;
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            // console.log(error);
            setError(error.message);
        }
        else {
            setError('');
            console.log(paymentMethod);
        }
    }
    return (
        <div className="container p-2">
            <form className='card-form' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Button style={{ width: '100px' }} className=' p-2' type="submit" disabled={!stripe}>
                    Pay ${price}
                </Button>
            </form>
            {
                error && <p style={{ color: 'red' }}>{error}</p>
            }
        </div>
    );
};

export default CheckoutFrom;