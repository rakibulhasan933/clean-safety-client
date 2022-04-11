import React from 'react';
import GoogleButton from 'react-google-button';


const Login = () => {

    const handleGoogleLogin = () => {
        console.log('click');
    }
    return (
        <div className='text-center py-5'>
            <h1 className='fw-bold font-monospace pb-5'>Login to Our Site Now!</h1>
            <GoogleButton onClick={handleGoogleLogin} className='mx-auto'></GoogleButton>
        </div>
    );
};

export default Login;