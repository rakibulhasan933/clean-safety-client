import React from 'react';
import './DashbordIntro.css';
import useAuth from '../../../hooks/useAuth';

const DashbordIntro = () => {
    const { user } = useAuth() || {};
    const { displayName, email } = user;
    return (
        <div className='container py-5' >
            <h1 className='text-center fs-1 font-monospace fw-bold' >Welcome to <span>Dashboard</span></h1>
            <br />
            <h4 className='text-center fs-1 font-monospace fw-bold' > {displayName} </h4>
            <p className='text-center fs-1 font-monospace fw-bold'>Your Email:- {email} </p>
        </div>
    );
};

export default DashbordIntro;