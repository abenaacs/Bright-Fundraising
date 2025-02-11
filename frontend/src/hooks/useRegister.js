import { useState } from 'react';
import axios from 'axios';

const useRegister = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const register = async (email, password) => {
        try {
            // Set the loading state to true
            setLoading(true);
            setError(null);  // Reset any previous errors

            // Make a POST request to the register endpoint
            const response = await axios.post('/api/register', {
                email,
                password,
            });

            // Handle successful registration
            if (response.status === 201) {
                const { token } = response.data;

                // Optionally save the token in local storage or a cookie
                localStorage.setItem('authToken', token);

                // Reset the loading state after successful registration
                setLoading(false);

                // Additional logic after registration can go here (e.g., redirect, update state)
                // You can return the token if you want to use it in the component
            }
        } catch (err) {
            // If an error occurs, update the error and loading states
            setLoading(false);

            // Handle different types of errors for better user feedback
            if (err.response) {
                // If server returns an error (status code other than 2xx)
                setError(err.response.data.message || 'An error occurred during registration.');
            } else if (err.request) {
                // If no response was received from the server
                setError('Server did not respond. Please check your internet connection.');
            } else {
                // Handle other types of errors (Axios misconfigurations, etc.)
                setError('An unexpected error occurred.');
            }
        }
    };

    return { register, error, loading };
};

export default useRegister;
