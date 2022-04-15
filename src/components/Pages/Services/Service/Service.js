import React, { useEffect, useState } from 'react';
import NavbarTop from '../../Shared/NavbarTop/NavbarTop';
import Footer from '../../Shared/Footer/Footer';
import Overview from '../../Home/Overview/Overview';
import ServiceCard from '../ServiceCard/ServiceCard';


const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])
    return (
        <div>
            <NavbarTop />
            <div className="container py-3">
                <Overview />
                <div className="container py-2">
                    <div className="service-container">
                        {
                            service.map(item => <ServiceCard key={item._id} item={item} ></ServiceCard>)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Service;