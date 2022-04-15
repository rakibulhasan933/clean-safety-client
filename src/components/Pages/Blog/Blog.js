import React from 'react';
import Blogs from '../Home/Blogs/Blogs';
import Footer from '../Shared/Footer/Footer';
import NavbarTop from '../Shared/NavbarTop/NavbarTop';

const Blog = () => {
    return (
        <div>
            <NavbarTop />
            <div className='container py-4 ' >
                <Blogs />
            </div>
            <Footer />
        </div>
    );
};

export default Blog;