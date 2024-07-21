import React, { useState } from 'react';
import './ResetPassword.css'

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
        <div class="form-container">
	<p class="title">Reset Password</p>
	<form class="form">
		<div class="input-group">
			<label for="username">New Password</label>
			<input type="password" name="n-pass" id="n-pass" placeholder=""/>
		</div>
		<div class="input-group">
			<label for="password">Confirm Password</label>
			<input type="password" name="c-pass" id="c-pass" placeholder=""/>
		</div>
		<button class="sign">Submit</button>
	</form>
	<p class="signup">Don't have an account?
		<a rel="noopener noreferrer" href="/register" class="">Sign up</a>
	</p>
</div>
    );
};

export default ResetPassword;
      
