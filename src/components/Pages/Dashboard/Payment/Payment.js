import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://ancient-lowlands-84914.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id]);
    console.log(service);
    return (
        <div>
            <h1>payment{id} </h1>
        </div>
    );
};

export default Payment;