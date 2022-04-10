import React from 'react';
import './Provider.css'

const Provider = () => {
    return (
        <div className="container">
            <div className="row provider">
                <div className="col-md-3 text-center py-5">
                    <h1 className='fw-bold font-monospace'>1500+</h1>
                    <h5 className='fw-bold font-monospace'>Happy Customers</h5>
                </div>
                <div className="col-md-3 text-center py-5">
                    <h1 className='fw-bold font-monospace'>100%</h1>
                    <h5 className='fw-bold font-monospace'>Satisfaction</h5>
                </div>
                <div className="col-md-3 text-center py-5">
                    <h1 className='fw-bold font-monospace'>1000+</h1>
                    <h5 className='fw-bold font-monospace'>Cleans Completed</h5>
                </div>
                <div className="col-md-3 text-center py-5">
                    <h1 className='fw-bold font-monospace'>50+</h1>
                    <h5 className='fw-bold font-monospace'>Cleaners</h5>
                </div>
            </div>
        </div>
    );
};

export default Provider;