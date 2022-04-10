import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faPagelines, faSuperpowers } from '@fortawesome/free-brands-svg-icons';
import './Report.css';

const Report = () => {
    return (
        <Container className='py-5'>
            <div className='row'>
                <div className="col-md-6 reasons">
                    <div className="my-2">
                        <h1 className='fw-bold font-monospace'>Reasons to <span>Choose Us</span></h1>
                        <p className='text-muted fw-lighter'>Behind our commitment to excellence are few key attributes that define who we are and what makes us different from any other.</p>
                    </div>
                    <div className="my-2">
                        <h3 className='fw-bold font-monospace'><FontAwesomeIcon icon={faBuilding} /> Top-Rated Company</h3>
                        <p className='text-muted fw-lighter'>We hold a successful track record of satisfying our customers and getting back their bond money.</p>
                    </div>
                    <div className="my-2">
                        <h3 className='fw-bold font-monospace'><FontAwesomeIcon icon={faSuperpowers} /> Superior Quality</h3>
                        <p className='text-muted fw-lighter'>We use the most excellent quality tools and equipment to get all the dust and dirt out of your premises.</p>
                    </div>
                    <div className="my-2">
                        <h3 className='fw-bold font-monospace'><FontAwesomeIcon icon={faPagelines} /> Eco-Friendly Products</h3>
                        <p className='text-muted fw-lighter'>We use biodegradable products which do not harm the environment, pets or humans in any way.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' style={{ height: '430px' }} src="https://i.ibb.co/N9kfnRt/pexels-cottonbro-3951389.jpg" alt="cleaning" />
                </div>
            </div>
        </Container>
    );
};

export default Report;