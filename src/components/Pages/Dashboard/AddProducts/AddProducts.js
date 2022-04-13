import React from 'react';
import Container from 'react-bootstrap/Container';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';

const AddProducts = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        const serviceData = {
            name: data.name,
            price: data.price,
            description: data.description,
            imageURL: data.imageURL
        }
        // console.log(serviceData);
        axios.post('http://localhost:5000/services', serviceData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully added your Services',
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
            <h4 className="font-monospace fw-bold pt-5">Add One More Services <i className="fas fa-hanukiah"></i></h4>

            <hr className="w-100 mb-4 mx-auto" />


            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true })}
                    placeholder="name"
                    className="p-2 m-2 w-50 input-field"
                />

                <input
                    {...register("description", { required: true })}
                    placeholder="Description"
                    className="p-2 m-2 w-50 input-field"
                />

                <input
                    {...register("price", { required: true })}
                    placeholder="Price"
                    type="number"
                    className="p-2 m-2 w-50 input-field"
                />

                <input
                    {...register("imageURL", { required: true })}
                    placeholder="Image Link"
                    type="url"
                    className="p-2 m-2 w-50 input-field"
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                    type="submit"
                    value="Add"
                    className="btn btn-info w-25 mt-2"
                />
            </form>
        </Container>
    );
};

export default AddProducts;