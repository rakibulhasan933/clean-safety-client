import React from 'react';
import Container from 'react-bootstrap/Container';
import { useForm } from 'react-hook-form';

const Reviews = () => {
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

            <h4 className="font-monospace fw-bold pt-5">Write Down Your Review</h4>

            <hr className="w-75 mb-5 mx-auto" />

            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                    className="input-field w-75 mb-3"
                    name="comments"
                    placeholder="Comments"
                    {...register("comments", { required: true })}
                />
                <br />

                <select
                    className=" w-20 mb-3"
                    {...register("ratting")}>
                    <option value="1">One Star</option>
                    <option value="2">Two Star</option>
                    <option value="3">There Star</option>
                    <option value="4">Four Star</option>
                    <option value="5">Five Star</option>
                </select>
                <br />

                <input
                    className="submit-btn btn btn-info mt-4 mb-3"
                    type="submit"
                    value="Review"
                />
            </form>
        </Container>
    );
};

export default Reviews;