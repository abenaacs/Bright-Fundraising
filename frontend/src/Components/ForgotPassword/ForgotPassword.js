import React, { useState } from 'react';
import './ForgotPassword.css'

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
        <div class="form-container">
	<p class="title">Forgot Password</p>
	<form class="form">
		<div class="input-group">
			<label for="username">Email</label>
			<input type="email" name="email" id="email" placeholder=""/>
		</div>
		<button class="sign" ><a href='/reset'>Submit</a></button>
	</form>
	<p class="signup">Don't have an account?
		<a rel="noopener noreferrer" href="/register" class="">Sign up</a>
	</p>
</div>
    );
};

export default ForgotPassword;
      
 
