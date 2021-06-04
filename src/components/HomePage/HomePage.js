import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Button, CircularProgress } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import Posts from '../Posts/Posts';
import axios from 'axios';

const HomePage = () => {
	const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile-oiiu')));
	const location = useLocation();
	const [ postData, setPostData ] = useState([]);

	useEffect(
		() => {
			const getPostData = async () => {
				axios
					.get('http://localhost:5000/posts')
					.then((res) => {
						console.log(res);
						setPostData([ ...res.data ]);
					})
					.catch((error) => {
						console.log(error);
					});
			};
			setUser(JSON.parse(localStorage.getItem('profile-oiiu')));

			getPostData();
		},
		[ location ]
	);
	return (
		<Grow in>
			<Container>
				<Grid container justify='space-between' alignItems='stretch' spacing={3}>
					{!postData.length ? (
						<Grid item xs={12} sm={8}>
							<CircularProgress />
						</Grid>
					) : (
						<Grow in>
							<Grid item xs={12} sm={8}>
								{postData &&
									postData
										.slice(0)
										.reverse()
										.map((post, index) => (
											<Posts
												key={index}
												id={post._id}
												username={post.username}
												title={post.title}
												postContent={post.postContent}
												date={post.createdAt}
												likePost={post.likes}
												userId={user && user._id}
											/>
										))}
							</Grid>
						</Grow>
					)}
					<Grid item xs={12} sm={4}>
						{user && (
							<Button
								component={Link}
								to='/post'
								fullWidth
								size='large'
								variant='contained'
								color='primary'
							>
								Create Post
							</Button>
						)}
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
};

export default HomePage;
