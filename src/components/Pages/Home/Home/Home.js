import React from 'react';
import NavbarTop from '../../Shared/NavbarTop/NavbarTop';
import CarouselHeader from '../CarouselHeader/CarouselHeader';
import Overview from '../Overview/Overview';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import Report from '../Report/Report';
import Provider from '../Provider/Provider';
import Review from '../Review/Review';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <NavbarTop />
            <CarouselHeader />
            <Overview />
            <Services />
            <Blogs />
            <Report />
            <Provider />
            <Review />
            <Footer />
        </div>
    );
};

export default Home;