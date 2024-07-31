import { useState } from 'react';
import axios from 'axios';

const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = async (email, password) => {

        try {
            // Set the loading state to true
            setLoading(true);

            // Make a POST request to the login endpoint
            const response = await axios.post('/api/login', {
                email,
                password,
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

    return { login, error, loading };
};

export default useLogin;