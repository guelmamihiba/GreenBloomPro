import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../api';

const VerifyEmail = () => {
    let [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) navigate('/signup');
        
        const verifyAccount = async () => {
            try {
                const response = await axiosInstance.post(`/auth/verify`, {token});
                console.log(response);
                // setMessage(response.data.message);
            } catch (error) {
                setMessage('Error verifying account. Please try again.');
            }
        };

        verifyAccount();
    }, [token, navigate]);

    return (
        <section className="auth-container">
            <div className="auth-box">
                <h2>Email Verification</h2>
                <p>{message}</p>
            </div>
        </section>
    );
};

export default VerifyEmail;
