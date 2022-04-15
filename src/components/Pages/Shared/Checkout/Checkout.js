import React, { useEffect, useState } from 'react';
import { faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../Footer/Footer';
import NavbarTop from '../NavbarTop/NavbarTop';
import './Checkout.css';
import axios from 'axios';
import Swal from 'sweetalert2';

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

    const { user } = useAuth() || {};
    const { displayName, email } = user;

    const onSubmit = (data) => {
        const oderData = {
            name: displayName,
            email: email,
            productName: name,
            price: price,
            phone: data.phone,
            address: data.address,
            time: data.time
        }
        // console.log(oderData);
        axios.post('http://localhost:5000/oder', oderData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your Oder Payment successfully',
                        showConfirmButton: false,
                        timer: 3000
                    })
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });

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
                            className="fw-bold rounded font-monospace p-2 m-2 w-50 input-field"
                        />

                        <input
                            {...register("address", { required: true })}
                            placeholder="Address"
                            type="text"
                            className="fw-bold rounded font-monospace p-2 m-2 w-50 input-field"
                        />

                        <input
                            {...register("time", { required: true })}
                            placeholder="DD/MM/YER"
                            type="datetime-local"
                            className=" fw-bold rounded font-monospace p-2 m-2 w-50 input-field"
                        />
                        <br />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input
                            type="submit"
                            value="Google Pay"
                            className=" fw-bold font-monospace rounded btn btn-outline-dark w-25 mt-2"

                        />
                    </form>
                    <h1 className=' mt-5 px-3 fs-2 font-monospace fw-bold'>Pay With Google Pay <span className='pay-part shadow-lg p-3 rounded'><FontAwesomeIcon icon={faGooglePay} /></span></h1>

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