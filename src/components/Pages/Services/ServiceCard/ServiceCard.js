import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ item }) => {
    const { _id, name, description, imageURL, price } = item;
    return (
        <section className='service-card-container'>
            <Link to={`checkout/${_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div className='service-card p-2'>
                    <img src={imageURL} className='img-fluid service-icon py-3' alt="" />
                    <h6 className='fs-4 fw-bold font-monospace'>{name}</h6>
                    <h5 className='fw-bold font-monospace'> Price = $ {price} </h5>
                    <p className='text-muted fw-lighter fw-bold font-monospace '>{description}</p>
                </div>
            </Link>
        </section>
    );
};


export default ServiceCard;