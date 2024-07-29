import React, { useState } from 'react';
import signin from '../../assets/signin.png'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('password:', password);
        console.log('email:', email);
    };

    return (

		<div className='md:grid md:grid-cols-2 md:gap-5 flex h-screen justify-center items-center'>
			<div className='pr-10 hidden md:flex'>
				<img src={signin} width={400} height={400} className='w-full h-[700px]'/>
			</div>
			<div>
                <div className='flex flex-col md:items-start md:mt-20 gap-10 md:p-10 items-center mt-20'>
                    <div className='flex flex-col items-center'>
                    <h2 className='text-white text-center text-2xl md:text-5xl mb-5'>Sign In</h2>
                    <h4 className='text-center text-sm md:text-xl'>Welcome back! Please sign in to manage your fundraising campaigns</h4>
                    <h4 className='text-center text-sm md:text-xl'> and track donations.</h4>
                    </div>
                <form>
                    <div className='flex flex-col md:gap-7 gap-3 items-center'>
                        <div className='flex flex-col gap-0'>
                        <label><h4 className='text-lg md:text-xl'>Email</h4></label>
                        <input 
                        type='email' 
                        required 
                        className='bg-[#d9e1ff] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5 md:w-[580px]'/>
                    </div>
                    <div className='flex flex-col gap-0'>
                        <label><h4 className='text-lg md:text-xl'>Password</h4></label>
                        <input 
                        type='password' 
                        required 
                        className='bg-[#d9e1ff] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5 md:w-[580px]'/>
                    </div>
                    <div>
                        <button className='md:w-[580px] w-[300px] mx-2'>Sign In</button>
                        <div className='flex md:flex-row flex-col md:justify-between items-center gap-2 mt-3 md:mt-0'>
                            <Link to='/forgot'><h6 className='text-white font-bold text-[15px]'>Forgot Password?</h6></Link>
                            <div className='flex'>
                                <h6 className='text-white font-bold text-[15px]'>have an account?</h6>
                                <Link to='/role'><h6 className='text-white font-bold text-[15px]'> Singup</h6></Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    </form>
                </div>
			</div>
		</div>
    );
};

export default Login;