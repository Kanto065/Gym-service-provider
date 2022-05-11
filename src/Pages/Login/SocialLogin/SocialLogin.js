import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorMsg;

    if (error) {
        errorMsg =
            <div>
                <p>Error: {error.message}</p>
            </div>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='social-login-container' >
            <div className='or'>
                <div className='line'></div>
                <p>or</p>
                <div className='line'></div>
            </div>
            <button
                onClick={() => signInWithGoogle()}
                className='googleSignin'>google signin</button>
            {errorMsg}
        </div>
    );
};

export default SocialLogin;