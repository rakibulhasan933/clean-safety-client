import React, { useEffect, useState } from 'react';
import ServicesListCard from '../ServicesListCard/ServicesListCard';

const ServicesList = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div className='pb-3'>
            <h3>Your ordered service list and service status</h3>
            <hr />
            <div className="row">
                {
                    services.length && services.map(service => <ServicesListCard key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default ServicesList;