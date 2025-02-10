import React, { useState } from 'react';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add logic to reset password
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col gap-7 items-center md:items-start'>
                <h2 className='text-white font-bold md:text-3xl text-2xl'>Reset Password</h2>
                <form className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-0'>
                        <label><h4 className='text-lg md:text-xl'>Passowrd</h4></label>
                        <input 
                        type='password'
                        required
                        className='bg-[#d9e1ff] md:w-[500px] w-[300px] rounded-md md:h-[32px] text-black px-5'
                        />
                    </div>
                    <div className='flex flex-col gap-0'>
                        <label><h4 className='text-lg md:text-xl'>Confirm Passowrd</h4></label>
                        <input 
                        type='password'
                        required
                        className='bg-[#d9e1ff] md:w-[500px] w-[300px] rounded-md md:h-[32px] text-black px-5'
                        />
                    </div>
                    <div>
                        <button className='md:w-[500px] w-[300px] p-0 text-[17px] md:text-xl md:h-[65px] h-[30px]'>Submit your request</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
      
