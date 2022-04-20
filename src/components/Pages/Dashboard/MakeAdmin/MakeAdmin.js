import axios from 'axios';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const serviceData = {
            email: data.email
        }
        // console.log(serviceData);
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully added new Admin',
                        showConfirmButton: false,
                        timer: 2500
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

            <h4 className="font-monospace fw-bold pt-5">Make a Admin Whom You Want</h4>

            <hr className="w-100 mb-5 mx-auto" />


            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="font-monospace fw-bold shadow-lg  bg-body rounded p-3 m-3 w-50 input-field"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />

                <input
                    className="font-monospace fw-bold shadow-lg rounded btn btn-info mt-4"
                    type="submit"
                    value="Make as Admin"
                />
            </form>
        </Container>
    );
};

export default MakeAdmin;