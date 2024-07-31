import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin'

const LoginForm = () => {
    // State variables for email, password, and login error
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Custom hook for handling login functionality
    const { login, loading, error } = useLogin();

    // Function to handle email input change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Function to handle password input change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call the login function from the custom hook
        await login(email, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:gap-7 gap-3 items-center">
                {/* Email input field */}
                <div className="flex flex-col gap-0">
                    <label>
                        <h4 className="text-lg md:text-xl">Email</h4>
                    </label>
                    <input
                        type="email"
                        required
                        className="bg-[#d9e1ff] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5 md:w-[580px]"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                {/* Password input field */}
                <div className="flex flex-col gap-0">
                    <label>
                        <h4 className="text-lg md:text-xl">Password</h4>
                    </label>
                    <input
                        type="password"
                        required
                        className="bg-[#d9e1ff] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5 md:w-[580px]"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>

                {/* Sign-in button and error display */}
                <div>
                    {/* Disable the sign-in button while loading */}
                    <button
                        type="submit"
                        className="md:w-[580px] w-[300px] mx-2"
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Sign In'}
                    </button>
                    {/* Display the login error if it exists */}
                    {error && (
                        <div className="text-red-500 mt-2">{error}</div>
                    )}

                    {/* Additional links */}
                    <div className="flex md:flex-row flex-col md:justify-between items-center gap-2 mt-3 md:mt-0">
                        <Link to="/forgot">
                            <h6 className="text-white font-bold text-[15px]">Forgot Password?</h6>
                        </Link>
                        <div className="flex">
                            <h6 className="text-white font-bold text-[15px]">Don't have an account?</h6>
                            <Link to="/role">
                                <h6 className="text-white font-bold text-[15px]"> Sign up</h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;