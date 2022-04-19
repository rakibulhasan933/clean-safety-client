import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCirclePlus, faStar, faUserPlus, faList, faSitemap } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    return (
        <div className='m-1 sidebar shadow-lg rounded'>
            <div className="p-1 dashboard ">
                <h5 className='fw-bold font-monospace text-center'>Dashboard</h5>
                <ul className='list-unstyled mt-4 fw-bold font-monospace '>
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='addProducts'><li className='fw-bold font-monospace sidebar-item'> <FontAwesomeIcon icon={faUserPlus} /> Add products</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='reviews'><li className='fw-bold font-monospace sidebar-item'><FontAwesomeIcon icon={faStar} /> Reviews</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='makeAdmin'><li className='fw-bold font-monospace sidebar-item'><FontAwesomeIcon icon={faPersonCirclePlus} /> Make Admin</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='servicesList'><li className='fw-bold font-monospace sidebar-item'><FontAwesomeIcon icon={faList} /> Product List</li></Link >
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='oderList'><li className='fw-bold font-monospace sidebar-item'> <FontAwesomeIcon icon={faSitemap} /> Oder List</li></Link >
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='myOder'><li className='fw-bold font-monospace sidebar-item'> <FontAwesomeIcon icon={faSitemap} /> My Oder List</li></Link >
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;