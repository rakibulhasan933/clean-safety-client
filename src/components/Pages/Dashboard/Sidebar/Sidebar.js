import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCirclePlus, faStar, faUserPlus, faList, faSitemap } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Sidebar = () => {
    const { admin } = useAuth() || {};




    return (
        <section className='m-1 sidebar shadow-lg rounded'>
            <h5 className='fw-bold font-monospace text-center'>Dashboard</h5>
            {admin ? <div className="p-1">
                <div className="sidebar-item fw-bold font-monospace">
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='addProducts'> <FontAwesomeIcon icon={faUserPlus} /> Add products </Link>
                </div>
                <div className="sidebar-item fw-bold font-monospace">
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='makeAdmin'><FontAwesomeIcon icon={faPersonCirclePlus} /> Make Admin </Link>
                </div>
                <div className="sidebar-item fw-bold font-monospace">
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='servicesList'><FontAwesomeIcon icon={faList} /> Product List</Link >
                </div>
                <div className="sidebar-item fw-bold font-monospace">
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='oderList'> <FontAwesomeIcon icon={faSitemap} /> Oder List</Link >
                </div>
            </div> :
                <div className="p-1">
                    <div className="sidebar-item fw-bold font-monospace">
                        <Link style={{ textDecoration: 'none', color: 'blue' }} to='myOder'> <FontAwesomeIcon icon={faSitemap} /> My Oder List</Link >
                    </div>
                    <div className="sidebar-item fw-bold font-monospace">
                        <Link style={{ textDecoration: 'none', color: 'blue' }} to='reviews'><FontAwesomeIcon icon={faStar} /> Reviews</Link>
                    </div>
                </div>}
        </section>
    );
};

export default Sidebar;