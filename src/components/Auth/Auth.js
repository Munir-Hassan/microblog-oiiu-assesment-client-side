import React from 'react';
import { Grow, Container } from '@material-ui/core';
import AuthForm from './AuthForm';

const Auth = () => {
	return (
		<Grow in>
			<Container maxWidth='xs'>
				<AuthForm />
			</Container>
		</Grow>
	);
};

export default Auth;
