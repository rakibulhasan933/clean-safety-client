import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const OderList = () => {
    const [oder, setOder] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/oder')
            .then(res => res.json())
            .then(data => setOder(data))
    }, [])
    return (
        <div className='py-2'>
            <div className="pb-2">
                <h3 className='fw-bold font-monospace'>Your ordered service list and service status</h3>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Services Name</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col"> Date line</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    {
                        oder.map(od => <tbody>
                            <tr key={od._id}   >
                                <td>{od.productName} </td>
                                <td>{od.name} </td>
                                <td>{od.address} </td>
                                <td>{od.phone} </td>
                                <td>{od.time} </td>
                                <td><Button>Deleted</Button></td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default OderList;