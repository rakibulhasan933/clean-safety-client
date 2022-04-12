import React from 'react';
import NavbarTop from '../Shared/NavbarTop/NavbarTop';
import Footer from '../Shared/Footer/Footer';
import Services from '../Home/Services/Services';
import Overview from '../Home/Overview/Overview';


const ServicesMain = () => {
    return (
        <div>
            <NavbarTop />
            <Overview />
            <Services />
            <Footer />
        </div>
    );
};

export default ServicesMain;