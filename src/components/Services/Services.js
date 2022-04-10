import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import './Services.css';

const servicesData = [
    {
        _id: 0,
        name: "Restaurant cleaning",
        description: "In this first, deep cleaning, we pay attention to every detail in every room of your home.",
        photoURL: "https://i.ibb.co/ZMZcRkw/restaurant-cleanings.jpg",
        price: 100
    },
    {
        _id: 1,
        name: "Home cleaning",
        description: "In this first, deep cleaning, we pay attention to every detail in every room of your home.",
        photoURL: "https://i.ibb.co/ZMZcRkw/restaurant-cleanings.jpg",
        price: 100
    },
    {
        _id: 2,
        name: "Office cleaning",
        description: "In this first, deep cleaning, we pay attention to every detail in every room of your home.",
        photoURL: "https://i.ibb.co/ZMZcRkw/restaurant-cleanings.jpg",
        price: 100
    }
];

const Services = () => {
    return (
        <section className='container py-2'>
            <div className="service-container">
                {
                    servicesData.map(item => <ServicesCard key={item._id} item={item} ></ServicesCard>)
                }
            </div>
        </section>
    );
};

export default Services;