import { useState } from 'react';
import axios from 'axios';

const useRegister = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const register = async (formData) => {
        console.log("User data: ", formData);
        try {
            // Set the loading state to true
            setLoading(true);

            // Make a POST request to the login endpoint
            const response = await axios.post('/api/login', {
                formData
            });

            // If the login is successful, the server should return a token or other relevant data
            const { token } = response.data;

            // You can save the token to local storage or a cookie for future use
            localStorage.setItem('authToken', token);

            // Reset the error and loading states
            setError(null);
            setLoading(false);

            // Perform any additional logic after a successful login, such as redirecting the user
            // or updating the application state
            // ...
        } catch (err) {
            // If an error occurs during the login process, update the error and loading states
            setError(err.response.data.message || 'An error occurred during login.');
            setLoading(false);
        }
    };

    return { register, error, loading };
};

export default useRegister;