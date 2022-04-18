import React from 'react';
import GoogleButton from 'react-google-button';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import NavbarTop from '../Shared/NavbarTop/NavbarTop';


const Login = () => {
    const { singInUsingInGoogle } = useAuth() || {};
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        singInUsingInGoogle()
            .then((result) => {
                // setUser(result.user);
                navigate(from, { replace: true })
            })
    };
    return (
        <div>
            <NavbarTop />
            <div className='text-center py-5'>
                <h1 className='fw-bold font-monospace pb-5'>Login to Our Site Now!</h1>
                <GoogleButton onClick={handleGoogleLogin} className='mx-auto'></GoogleButton>
            </div>
            <Footer />
        </div>
    );
};

export default Login;