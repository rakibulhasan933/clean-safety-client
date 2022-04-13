import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProducts = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data) => {
        const serviceData = {
            name: data.name,
            price: data.price,
            description: data.description,
            imageURL: imageURL
        }
        console.log(serviceData);
    }
    const handleImageUpload = (e) => {
        const imageData = new FormData();
        imageData.set('key', '653e47c04775bf54b071a6f09142d5a0')
        imageData.append('image', e.target.file[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
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
                    {...register("image", { required: true })}
                    placeholder="Image"
                    onChange={handleImageUpload}
                    type="file"
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