import React from 'react';
import Button from 'react-bootstrap/Button';

const ServicesListCard = ({ service }) => {
    const { _id, name, description, imageURL, price } = service;
    return (
        <div className="card h-100 shadow-lg  bg-body rounded">
            <img src={imageURL} className="card-img-top" alt="carpet" />
            <div className="card-body shadow-lg  bg-body rounded">
                <h4 className="card-title fw-bold font-monospace">{name} </h4>
                <h5 className="card-title fw-bold font-monospace">Price: $ {price} </h5>
                <p className="card-text fw-lighter font-monospace">{description} </p>
            </div>
            <div className="card-footer shadow-lg  bg-body rounded">
                <Button variant="outline-info fw-bold font-monospace">Deleted</Button>{' '}
            </div>
        </div>
    );
};

export default ServicesListCard;