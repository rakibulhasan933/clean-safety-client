import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Blog.css';

const Blogs = () => {
    return (
        <Container className='py-5 blog'>
            <div className="text-center">
                <h1 className='fs-1 fw-bold font-monospace '>Cleaning Industry News</h1>
                <p className='text-muted fw-lighter'>We write about industry developments, training, health and safety, eco-friendly cleaning products, recycling practices and advice for working with professional cleaners.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src='https://i.ibb.co/hD5Kj8p/carpet.jpg' className="card-img-top" alt="carpet" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Carpet Cleaner </h5>
                            <p className="card-text fw-lighter">Because soap and shampoo residue is sticky, it attracts dirt and grime. This is especially noticeable in high traffic areas because every time someone walks on the carpet</p>
                        </div>
                        <div className="card-footer">
                            <Button variant="outline-info fw-bold">Learn more</Button>{' '}
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src='https://i.ibb.co/Wtr6MSn/table.jpg' className="card-img-top" alt="office card" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Confessions of an Office Cleaner</h5>
                            <p className="card-text fw-lighter">Allow yourself 2 1/2 hours a week to clean a two-bedroom home. You should also add an extra 1 hour a week when you decide to deep clean. If you have a typical</p>
                        </div>
                        <div className="card-footer">
                            <Button variant="outline-info fw-bold">Learn more</Button>{' '}
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src='https://i.ibb.co/Js04Dhp/table-desk.jpg' className="card-img-top" alt="office desk" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Ensure Good Hygiene at the Office</h5>
                            <p className="card-text fw-lighter">Cleaning tasks such as dusting, sweeping floors and vacuuming. Refilling supplies, such as toilet paper. Cleaning spills, broken glass and other messes.</p>
                        </div>
                        <div className="card-footer">
                            <Button variant="outline-info fw-bold">Learn more</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Blogs;