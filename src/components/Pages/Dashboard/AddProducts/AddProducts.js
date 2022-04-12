import React from 'react';
import Container from 'react-bootstrap/Container';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <Container>
            <h4 className="font-monospace fw-bold pt-5">Add One More Services <i className="fas fa-hanukiah"></i></h4>

            <hr className="w-100 mb-4 mx-auto" />


            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("title", { required: true })}
                    placeholder="Title"
                    className="p-2 m-2 w-50 input-field"
                />

                <input
                    {...register("details", { required: true })}
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
                    className="p-2 m-2 w-50 input-field"
                    type="number"
                    name="ratings"
                    placeholder="ratings"
                    {...register("review", { required: true, min: 0, max: 5 })}
                />

                <input
                    {...register("image", { required: true })}
                    placeholder="Image Link"
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