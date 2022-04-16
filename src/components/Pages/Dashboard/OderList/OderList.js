import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

const OderList = () => {
    const [oder, setOder] = useState([]);
    const [isDelete, setIsDelete] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/oder')
            .then(res => res.json())
            .then(data => setOder(data))
    }, [])
    const handleDeleteOder = (id) => {
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
                fetch(`http://localhost:5000/oder/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount) {

                            Swal.fire(
                                'Deleted!',
                                'This Oder has been deleted.',
                                'success'
                            )

                            const remainingUsers = oder.filter(order => order._id !== id);
                            setOder(remainingUsers);
                            setIsDelete(true);
                        } else {
                            setIsDelete(false);
                        }
                    })
            }

        })
    };
    return (
        <div className='py-2'>
            <div className="pb-2">
                <h3 className='fw-bold font-monospace'>Your ordered service list and service status</h3>
                <hr />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className='fw-bold font-monospace' scope="col">Services</th>
                            <th className='fw-bold font-monospace' scope="col">Name</th>
                            <th className='fw-bold font-monospace' scope="col">Phone</th>
                            <th className='fw-bold font-monospace' scope="col">Date line</th>
                            <th className='fw-bold font-monospace' scope="col">Address</th>
                            <th className='fw-bold font-monospace' scope="col">Delete</th>
                        </tr>
                    </thead>
                    {
                        oder.map(od => <tbody>
                            <tr key={od._id}   >
                                <td className='fw-bold font-monospace'> {od.productName} </td>
                                <td className='fw-bold font-monospace'> {od.name} </td>
                                <td className='fw-bold font-monospace'>{od.phone} </td>
                                <td className='fw-bold font-monospace'>{od.time} </td>
                                <td className='fw-bold font-monospace'> {od.address} </td>
                                <td><Button onClick={() => handleDeleteOder(od._id)} className='fw-bold font-monospace btn btn-danger'>Deleted</Button></td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default OderList;