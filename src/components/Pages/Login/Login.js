import React from 'react';
import GoogleButton from 'react-google-button';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import NavbarTop from '../Shared/NavbarTop/NavbarTop';


const Login = () => {
    const { singInUsingInGoogle, setUser } = useAuth() || {};
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        singInUsingInGoogle()
            .then((result) => {
                setUser(result.user);
                const user = result.user;
                saveUser(user.email, user.displayName);
                navigate(from, { replace: true })
            })
    };

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
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