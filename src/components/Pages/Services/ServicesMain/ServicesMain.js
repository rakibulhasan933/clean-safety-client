import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import NavbarTop from '../../Shared/NavbarTop/NavbarTop';

const ServicesMain = () => {
    return (
        <div>
            <NavbarTop />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default ServicesMain;