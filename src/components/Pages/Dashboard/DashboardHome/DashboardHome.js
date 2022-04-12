import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavbarTop from '../../Shared/NavbarTop/NavbarTop';
import Sidebar from '../Sidebar/Sidebar';

const DashboardHome = () => {
    return (
        <div>
            <NavbarTop />
            <div className="container">
                <div className="row py-3">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h1>Contain</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardHome;