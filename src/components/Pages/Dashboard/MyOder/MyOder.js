import React from 'react';
import { Outlet } from 'react-router-dom';

const MyOder = () => {
    return (
        <div className='container'>
            <Outlet />
        </div>
    );
};

export default MyOder;