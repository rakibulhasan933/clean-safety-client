import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import { faComment, faEdit, faListAlt, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faList, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <section className='sidebar'>
            <div className='ps-3 pe-3'>
                <div className='sidebar-item'>
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='/addService'>
                        <FontAwesomeIcon icon={faPlusSquare} /> Add Service
                    </Link>
                </div>
                <div className='sidebar-item'>
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='/order-list'>
                        <FontAwesomeIcon icon={faList} /> Order List
                    </Link>
                </div>
                <div className='sidebar-item'>
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='/manage-service'>
                        <FontAwesomeIcon icon={faEdit} /> Manage Service
                    </Link>
                </div>
                <div className='sidebar-item'>
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='/make-admin'>
                        <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                    </Link>
                </div>
            </div>
            <div className='ps-3 pe-3'>
                <div className='sidebar-item'>
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='/checkout/:id'>
                        <FontAwesomeIcon icon={faServicestack} /> Service
                    </Link>
                </div>
                <div className='sidebar-item'>
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='/orders/:email'>
                        <FontAwesomeIcon icon={faListAlt} /> Service List
                    </Link>
                </div>
                <div className='sidebar-item'>
                    <Link style={{ textDecoration: 'none', color: 'blue' }} to='/add-review'>
                        <FontAwesomeIcon icon={faComment} /> Review
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;