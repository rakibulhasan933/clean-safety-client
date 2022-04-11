import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavbarTop from '../Shared/NavbarTop/NavbarTop';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <NavbarTop />
            <div className='container  notFound'>
                <div className="text-center">
                    <h1 className='font-monospace'>4<span>0</span>4</h1>
                    <h2 className='font-monospace fw-bold'>This page is not found please try agin <span><Link to="/">Home</Link></span></h2>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;