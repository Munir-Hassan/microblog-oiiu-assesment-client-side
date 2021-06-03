import React from 'react';
import { Grow, Container } from '@material-ui/core';
import PostForm from './PostForm';

const Post = () => {
	return (
		<Grow in>
			<Container maxWidth='xs'>
				<PostForm />
			</Container>
		</Grow>
	);
};

export default Post;
