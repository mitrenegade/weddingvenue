import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection, Input } from './common'

class LoginForm extends Component {
	state = {email: '', password: ''}
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="user@gmail.com"
						value={this.state.email}
						onChangeTextFunc={email => this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Password"
						placeholder="password"
						value={this.state.password}
						secureTextEntry
						onChangeTextFunc={passwd => this.setState({ password: passwd })}
					/>
				</CardSection>
				<CardSection>
					<Button>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;