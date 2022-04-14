import { faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavbarTop from '../NavbarTop/NavbarTop';
import './Checkout.css';

const Checkout = () => {
    const [service, setService] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [id]);
    const { name, price, description, imageURL } = service;
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <Container>
            <NavbarTop />
            <div className="row py-5">
                <h4 className="font-monospace fw-bold pt-2">Oder confirm Services <i className="fas fa-hanukiah"></i></h4>
                <hr className="w-100 mb-2 mx-auto" />
                <div className="col-md-5 p-2 m-2 pay">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("phone", { required: true })}
                            placeholder="Phone number"
                            type="tel"
                            className="p-2 m-2 w-50 input-field"
                        />

                        <input
                            {...register("address", { required: true })}
                            placeholder="Address"
                            type="text"
                            className="p-2 m-2 w-50 input-field"
                        />

                        <input
                            {...register("time", { required: true })}
                            placeholder="DD/MM/YER"
                            type="datetime-local"
                            className="p-2 m-2 w-50 input-field"
                        />
                        <br />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input
                            type="submit"
                            value="Pay With Google Pay"
                            className="btn btn-info w-25 mt-2"

                        />
                    </form>
                    <h1 className=' mt-5 px-3 fs-2 font-monospace fw-bold'>Pay With Google Pay <span className='p-1 rounded'><FontAwesomeIcon icon={faGooglePay} /></span></h1>

                </div>
                <div className="col-md-5">
                    <div className="card h-80 shadow-lg p-1 mb-2 bg-body rounded">
                        <img src={imageURL} style={{ width: '440px', height: '300px' }} className="card-img-top img-fluid  rounded" alt="carpet" />
                        <div className="card-body">
                            <h4 className="card-title fs-4 fw-bold font-monospace">{name} </h4>
                            <p className="card-text fw-lighter font-monospace text-muted">{description}</p>
                            <h5 className='fs-6 fw-bold font-monospace'>Price: $ {price}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    );
};

export default Checkout;