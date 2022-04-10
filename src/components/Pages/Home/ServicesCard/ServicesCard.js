import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesCard.css';

const ServicesCard = ({ item }) => {
    // console.log(item);
    const { name, description, photoURL, price } = item;
    return (
        <section className='service-card-container'>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                <div className='service-card p-2'>
                    <img src={photoURL} className='img-fluid service-icon py-3' alt="" />
                    <h6>{name}</h6>
                    <h5 className='text-primary'> $ {price} </h5>
                    <p>{description}</p>
                </div>
            </Link>
        </section>
    );
};

export default ServicesCard;