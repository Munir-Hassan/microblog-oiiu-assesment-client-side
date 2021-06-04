import React, { useState } from 'react';
import { Paper, Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { createPost } from '../../API';
import useStyles from './styles';

const initialPostFormState = { title: '', postContent: '' };
const Form = () => {
	const history = useHistory();
	const classes = useStyles();
	const [ postForm, setPostForm ] = useState(initialPostFormState);
	const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile-oiiu')));
	console.log(user);
	const username = { name: `${user && user.name.firstname} ${user && user.name.lastname}` };
	console.log(username);

	const handleInputChange = (e) => {
		setPostForm({ ...postForm, [e.target.name]: e.target.value });
	};

	const handlePostFormSubmit = async (event) => {
		event.preventDefault();
		console.log(postForm);

		setPostForm({ ...postForm, username: username.name });
		console.log(postForm);
		await createPost(postForm);
		resetPostForm();
		history.push('/');
	};

	const resetPostForm = () => {
		setPostForm(initialPostFormState);
	};
	return (
		<Paper elevation={4} variant='outlined' className={classes.paperForm}>
			<form method='POST' className={classes.form} onSubmit={handlePostFormSubmit}>
				<TextField
					name='title'
					label='Title'
					value={postForm.title}
					required
					fullWidth
					six='small'
					className={classes.inputField}
					onChange={handleInputChange}
				/>
				<TextField
					name='postContent'
					label='Post Content'
					value={postForm.postContent}
					required
					multiline
					row={5}
					fullWidth
					variant='outlined'
					size='medium'
					className={classes.inputField}
					onChange={handleInputChange}
				/>
				<Button type='submit' fullWidth size='large' color='primary' variant='outlined'>
					Create Post
				</Button>
			</form>
		</Paper>
	);
};

export default Form;
