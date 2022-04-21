import React, { Suspense, useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Spinner from '../../Shared/Spinner/Spinner';

const MyOder = () => {
    const { user } = useAuth();
    const [oder, setOder] = useState([]);

    useEffect(() => {
        const url = `https://ancient-lowlands-84914.herokuapp.com/oders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOder(data));
    }, [user.email]);
    // console.log(oder);
    return (
        <div className='py-2'>
            <div className="pb-2">
                <h3 className='fw-bold font-monospace'>Your ordered service list and oder status</h3>
                <hr />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className='fw-bold font-monospace' scope="col">Services</th>
                            <th className='fw-bold font-monospace' scope="col">Price</th>
                            <th className='fw-bold font-monospace' scope="col">Date line</th>
                            <th className='fw-bold font-monospace' scope="col">Payment</th>
                        </tr>
                    </thead>
                    <Suspense fallback={<Spinner />}>
                        {
                            oder.map(od => <tbody>
                                <tr key={od._id}   >
                                    <td className='fw-bold font-monospace'> {od.productName} </td>
                                    <td className='fw-bold font-monospace'> {od.price} </td>
                                    <td className='fw-bold font-monospace'>{od.time} </td>
                                    <td className='fw-bold font-monospace'>Coming soon </td>
                                </tr>
                            </tbody>)
                        }
                    </Suspense>
                </table>
            </div>
        </div>
    );
};

export default MyOder;