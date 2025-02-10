import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement password reset logic here
        console.log('Email:', email);
        // Reset the email input field
        setEmail('');
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col md:items-start md:gap-7 gap-5 items-center'>
            <h2 className='text-white md:text-3xl text-xl font-bold'>Forgot Passowrd</h2>
            <form className='flex flex-col gap-5 items-center'>
                <div className='flex flex-col gap-0'>
                    <label><h4 className='text-lg md:text-xl'>Email</h4></label>
                    <input
                    type='email'
                    required 
                    className='bg-[#d9e1ff] md:w-[500px] w-[300px] rounded-md md:h-[32px] text-black px-5'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <button className='md:w-[500px] w-[300px] p-0 text-[17px] md:text-xl md:h-[65px] h-[30px]'>Send Email</button>
                    <div className='flex gap-2'>
                    <h6 className='text-white font-bold text-sm'>don't have an account?</h6>
                    <Link to='/role'><h6 className='text-white font-bold text-sm'>Signup</h6></Link>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
      
 
