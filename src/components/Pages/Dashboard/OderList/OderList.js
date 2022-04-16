import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

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
                                <td><Button className='fw-bold font-monospace btn btn-danger' >Deleted</Button></td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default OderList;