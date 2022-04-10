import React from 'react';
import { Link } from 'react-router-dom';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';


const Footer = () => {
    return (
        <footer className='footer-area clear-both'>
            <div className="container pt-5">
                <div className="row py-5">
                    <div className="col-md-6 footer-head">
                        <h1 className='fw-bold fst-italic '><Link to='/'>CLEAN <br /><span > CRAFTY</span></Link></h1>
                        <p className='fw-lighter pr-3'>We use natural and eco-friendly cleaning products and have a customer satisfaction guarantee.</p>
                        <p className='fw-lighter '>Our online scheduling and payment system is safe.</p>
                        <Link to='/services'><button className="fw-bold font-monospace btn btn-outline-info rounded-pill border border-5 border-info">Our Services</button></Link>
                    </div>
                    <div className="col-md-3">
                        <h5 className='fw-bold font-monospace color-part'>Important Link</h5>
                        <ul className='list-unstyled mt-4'>
                            <li className='font-monospace'><Link to='/'>Commercial Cleaning</Link></li>
                            <li className='font-monospace'><Link to='/'>Apartment Cleaning</Link></li>
                            <li className='font-monospace'><Link to='/'>Window Cleaning</Link></li>
                            <li className='font-monospace'><Link to='/'>Office Cleaning</Link></li>
                            <li className='font-monospace'><Link to='/'>Car Wash</Link></li>
                            <li className='font-monospace'><Link to='/'>After Renovation</Link></li>
                            <li className='font-monospace'><Link to='/'>Move In / Move out</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <h5 className='fw-bold font-monospace color-part'>Contact us</h5>
                            <ul className="list-unstyled mt-4">
                                <li className="font-monospace"><Link to='/'>Bhurugamari , Kurigram</Link></li>
                                <li className="font-monospace"><Link to='/'>Google map</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="social-media list-inline">
                                <li className="list-inline-item text-primary"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item text-danger"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                                <li className="list-inline-item text-primary"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                                <li className="list-inline-item text-danger"><a href="//youtube.com"><FontAwesomeIcon className="icon" icon={faYoutube} /></a></li>
                            </ul>
                        </div>
                        <div className='pt-3'>
                            <h6 className='fw-bold font-monospace color-part'>Hotline</h6>
                            <h3 className='font-monospace text-info'>+8801794-970431</h3>
                        </div>
                    </div>
                </div>
                <div className="text-center footer-part">
                    <p className='fw-bold font-monospace'>Copyright <span>{(new Date()).getFullYear()}</span>, Clean Crafty <span>@rakibul</span> - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;