import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { signUpStart } from 'store/user/user.action';

import FormInput from 'components/form-input/form-input.component';
import CustomButton from 'components/custom-button/custom-button.component';

import './sign-up.styles.scss';


class SignUp extends React.Component {
	constructor() {
		super();
		
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}
	
	handleSubmit = async event => {
		event.preventDefault();
		
		const { displayName, email, password, confirmPassword } = this.state;
		const { signUpStart } = this.props;
		
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		
		signUpStart({ displayName, email, password });
	};
	
	handleChange = event => {
		const { name, value } = event.target;
		
		this.setState({ [name]: value });
	};
	
	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		
		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have a account</h2>
				<span>Sign up with your email and password</span>
				
				<form className='sign-up-form' onSubmit={ this.handleSubmit }>
					<FormInput
						type='text'
						name='displayName'
						value={ displayName }
						onChange={ this.handleChange }
						label='Display Name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={ email }
						onChange={ this.handleChange }
						label='Email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={ password }
						onChange={ this.handleChange }
						label='Password'
						autoComplete="on"
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={ confirmPassword }
						onChange={ this.handleChange }
						label='Confirm Password'
						autoComplete="on"
						required
					/>
					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			
			</div>
		);
	}
}


SignUp.propTypes = {
	signUpStart: PropTypes.func.isRequired
};


const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});


export default connect(null, mapDispatchToProps)(SignUp);
