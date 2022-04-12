import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import NavbarTop from '../../Shared/NavbarTop/NavbarTop';
import Sidebar from '../Sidebar/Sidebar';

const DashboardHome = () => {
    return (
        <div>
            <NavbarTop />
            <div className="container">
                <div className="row py-2">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardHome;