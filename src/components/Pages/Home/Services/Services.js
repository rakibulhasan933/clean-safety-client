import React, { Suspense, useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import ServicesCard from '../ServicesCard/ServicesCard';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    return (
        <section className='container py-2'>
            <div className="service-container">
                <Suspense fallback={<Spinner />}>
                    {
                        services.length && services.map(item => <ServicesCard key={item._id} item={item} ></ServicesCard>)
                    }
                </Suspense>
            </div>
        </section>
    );
};

export default Services;