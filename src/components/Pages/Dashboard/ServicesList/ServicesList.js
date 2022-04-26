import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';


const ServicesList = () => {
    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(null);
    useEffect(() => {
        fetch('https://ancient-lowlands-84914.herokuapp.com/services')
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
                fetch(`https://ancient-lowlands-84914.herokuapp.com/deleteServices/${id}`, {
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
        <div className='pb-3'>
            <h3 className='fw-bold font-monospace'>Your ordered service list and service status</h3>
            <hr />
            <div className="container p-1">
                <div className="row">
                    {
                        products.map(service => <div className="col-md-4" key={service._id}>
                            <div className="card h-25 shadow-lg  bg-body rounded">
                                <img src={service.imageURL} className="card-img-top" alt="carpet" />
                                <div className="card-body shadow-lg  bg-body rounded">
                                    <h4 className="card-title fw-bold font-monospace">{service.name} </h4>
                                    <h5 className="card-title fw-bold font-monospace">Price: $ {service.price} </h5>
                                    <p className="card-text fw-lighter font-monospace">{service.description} </p>
                                </div>
                                <div className="card-footer shadow-lg  bg-body rounded">
                                    <Button onClick={() => handleDeleteProduct(service._id)} variant="outline-danger fw-bold font-monospace">Deleted</Button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesList;