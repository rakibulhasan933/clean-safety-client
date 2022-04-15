import React from 'react';
import Container from 'react-bootstrap/Container';
import { useForm } from 'react-hook-form';


const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
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