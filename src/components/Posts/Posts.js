import React, { useState } from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar, IconButton, CardActions } from '@material-ui/core';
import axios from 'axios';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import useStyles from './styles';

const Posts = ({ title, postContent, date, likes, id, userId }) => {
	const classes = useStyles();
	const [ isLiked, setIsLiked ] = useState(false);
	const handlePostLikes = async () => {
		const likeRequest = { id, userId };
		try {
			await axios
				.post('http://localhost:5000/posts', likeRequest)
				.then((res) => {
					console.log(res);
				})
				.catch((error) => {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}

		setIsLiked(!isLiked);
	};
	return (
		<Card className={classes.posts} raised>
			<CardHeader
				avatar={
					<Avatar aria-label='recipe' className={classes.avatar}>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title={id}
				subheader={date.toString()}
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
				<Typography variant='body1'>{likes.length}</Typography>
			</CardActions>
		</Card>
	);
};

export default Posts;
