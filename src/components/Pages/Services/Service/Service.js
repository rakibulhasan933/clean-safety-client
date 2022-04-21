import React, { Suspense, useEffect, useState } from 'react';
import Overview from '../../Home/Overview/Overview';
import Spinner from '../../Shared/Spinner/Spinner';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css';


const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://ancient-lowlands-84914.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])
    return (
        <div>
            <div className="container py-3">
                <Overview />
                <div className="container py-2">
                    <Suspense fallback={<Spinner />}>
                        <div className="service-container">
                            {
                                service.map(item => <ServiceCard key={item._id} item={item} ></ServiceCard>)
                            }
                        </div>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Service;