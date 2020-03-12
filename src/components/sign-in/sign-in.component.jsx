import React from 'react';
import { connect } from "react-redux";

import { googleSignInStart, emailSignInStart } from "store/user/user.action";

import FormInput from 'components/form-input/form-input.component';
import CustomButton from 'components/custom-button/custom-button.component';

import './sign-in.styles.scss';


class SignIn extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			email: '',
			password: ''
		};
	}
	
	handleSubmit = async event => {
		event.preventDefault();
		
		const { email, password } = this.state;
		const { emailSignInStart } = this.props;
		
		emailSignInStart(email, password)
	};
	
	handleChange = event => {
		const { value, name } = event.target;
		
		this.setState({ [name]: value });
	};
	
	render() {
		const { email, password } = this.state;
		const { googleSignInStart } = this.props;
		
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				
				<form onSubmit={ this.handleSubmit }>
					<FormInput
						name='email'
						type='email'
						handleChange={ this.handleChange }
						value={ email }
						label='email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={ password }
						handleChange={ this.handleChange }
						label='password'
						autoComplete="on"
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'> Sign in </CustomButton>
						
						{/* google button for firebase auth service */}
						<CustomButton onClick={ googleSignInStart } isgooglesignin="true">
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}


const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});


export default connect(null, mapDispatchToProps)(SignIn);
