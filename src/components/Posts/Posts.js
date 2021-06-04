import React, { useState } from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar, IconButton, CardActions } from '@material-ui/core';
import axios from 'axios';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import useStyles from './styles';

const Posts = ({ username, title, postContent, date, likePost, id, userId }) => {
	const classes = useStyles();
	const [ isLiked, setIsLiked ] = useState(likePost.includes(userId));
	const [ postLikes, setPostLikes ] = useState(likePost.length);

	const handlePostLikes = async () => {
		if (userId) {
			const userLikeRequest = { userId };
			try {
				await axios
					.patch(`http://localhost:5000/posts/${id}/likePost`, userLikeRequest)
					.then((res) => {
						console.log(res.data.likes);
						setPostLikes(res.data.likes.length);
					})
					.catch((error) => {
						console.log(error);
					});
			} catch (error) {
				console.log(error);
			}
			setIsLiked(!isLiked);
		} else {
			alert('Please Sign in to like a post');
		}
	};
	return (
		<Card className={classes.posts} raised>
			<CardHeader
				avatar={
					<Avatar aria-label='recipe' className={classes.avatar}>
						{username && username.charAt()}
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title={username}
				subheader={date}
			/>
			<CardContent>
				<Typography variant='h4'>{title}</Typography>
				<Typography variant='body1' color='textSecondary' paragraph>
					{postContent}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='Like' color='primary' onClick={handlePostLikes}>
					{isLiked ? <ThumbUpAltIcon /> : <ThumbUpAltOutlinedIcon />}
				</IconButton>
				<Typography variant='body1'>{postLikes}</Typography>
			</CardActions>
		</Card>
	);
};

export default Posts;
