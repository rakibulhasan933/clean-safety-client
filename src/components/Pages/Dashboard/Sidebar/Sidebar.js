import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCirclePlus, faStar, faUserPlus, faList, faSitemap } from '@fortawesome/free-solid-svg-icons';



const Sidebar = () => {
    return (
        <div className='m-1'>
            <div className="p-1">
                <h5 className='fw-bold font-monospace'>Dashboard</h5>
                <ul className='list-unstyled mt-4 fw-bold font-monospace'>
                    <li className='fw-bold font-monospace'><FontAwesomeIcon icon={faUserPlus} /> Add products</li>
                    <li className='fw-bold font-monospace'><FontAwesomeIcon icon={faStar} /> Reviews</li>
                    <li className='fw-bold font-monospace'><FontAwesomeIcon icon={faPersonCirclePlus} /> Make Admin</li>
                    <li className='fw-bold font-monospace'><FontAwesomeIcon icon={faList} /> Product List</li>
                    <li className='fw-bold font-monospace'> <FontAwesomeIcon icon={faSitemap} /> Oder List</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;