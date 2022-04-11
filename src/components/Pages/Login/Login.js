import React from 'react';
import GoogleButton from 'react-google-button';
import useFirebase from '../../hooks/useFirebase';
import Footer from '../Shared/Footer/Footer';
import NavbarTop from '../Shared/NavbarTop/NavbarTop';


const Login = () => {
    const { singInUsingInGoogle } = useFirebase();
    return (
        <div>
            <NavbarTop />
            <div className='text-center py-5'>
                <h1 className='fw-bold font-monospace pb-5'>Login to Our Site Now!</h1>
                <GoogleButton onClick={singInUsingInGoogle} className='mx-auto'></GoogleButton>
            </div>
            <Footer />
        </div>
    );
};

export default Login;