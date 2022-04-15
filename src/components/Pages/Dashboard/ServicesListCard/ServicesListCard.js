import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

const ServicesListCard = (props) => {
    // console.log(props);
    const { _id, name, description, imageURL, price } = props.service;
    const [isDelete, setIsDelete] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [products, isDelete])


    const handleDeleteProduct = (id) => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteServices/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount) {

                            Swal.fire(
                                'Deleted!',
                                'This product has been deleted.',
                                'success'
                            )

                            const remainingUsers = products.filter(order => order._id !== id);
                            setProducts(remainingUsers);
                            setIsDelete(true);
                        } else {
                            setIsDelete(false);
                        }
                    })
            }

        })
    };
    return (
        <div className="col-md-4">
            <div className="card h-25 shadow-lg  bg-body rounded">
                <img src={imageURL} className="card-img-top" alt="carpet" />
                <div className="card-body shadow-lg  bg-body rounded">
                    <h4 className="card-title fw-bold font-monospace">{name} </h4>
                    <h5 className="card-title fw-bold font-monospace">Price: $ {price} </h5>
                    <p className="card-text fw-lighter font-monospace">{description} </p>
                </div>
                <div className="card-footer shadow-lg  bg-body rounded">
                    <Button onClick={() => handleDeleteProduct(_id)} variant="outline-info fw-bold font-monospace">Deleted</Button>
                </div>
            </div>
        </div>
    );
};

export default ServicesListCard;