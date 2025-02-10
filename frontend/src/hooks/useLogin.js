import { useState } from 'react';
import axios from 'axios';

const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [authToken, setAuthToken] = useState(null);

    const login = async (email, password) => {
        try {
            // Set the loading state to true
            setLoading(true);
            setError(null);  // Reset previous errors

            // Make a POST request to the login endpoint
            const response = await axios.post('/api/login', {
                email,
                password,
            });

            // Handle successful login
            if (response.status === 200) {
                const { token } = response.data;

                // Save the token in local storage or a cookie
                localStorage.setItem('authToken', token);
                setAuthToken(token);  // Store token in state for immediate use

                // Reset the loading and error states
                setLoading(false);
            }
        } catch (err) {
            // Handle errors and update the state with an appropriate message
            setLoading(false);
            if (err.response) {
                // Server returned an error
                setError(err.response.data.message || 'An error occurred during login.');
            } else if (err.request) {
                // No response from server
                setError('Server did not respond. Please check your internet connection.');
            } else {
                // Other errors (e.g., Axios misconfiguration)
                setError('An unexpected error occurred.');
            }
        }
    };

    const logout = () => {
        // Clear the stored auth token and reset the state
        localStorage.removeItem('authToken');
        setAuthToken(null);
    };

    return { login, error, loading, authToken, logout };
};

export default useLogin;
