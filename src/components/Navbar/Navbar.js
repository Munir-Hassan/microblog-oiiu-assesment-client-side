import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Avatar, Button } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';

const Navbar = () => {
	const location = useLocation();
	const classes = useStyles();
	const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile-oiiu')));
	useEffect(
		() => {
			setUser(JSON.parse(localStorage.getItem('profile-oiiu')));
		},
		[ location ]
	);

	const handleLogOut = () => {
		console.log(user);
		localStorage.clear();
		setUser(null);
	};

	return (
		<nav>
			<AppBar className={classes.appBar} position='static' color='inherit'>
				<div className={classes.brandContainer}>
					<Typography component={Link} to='/' className={classes.heading} variant='h2' align='center'>
						MicroBlogr
					</Typography>
				</div>

				<div className={classes.profileContainer}>
					{user ? (
						<React.Fragment>
							<Avatar src='' alt='Munir Hassan'>
								M
							</Avatar>
							<Typography varient='body2' align='center'>
								{user && user.name.firstName}
							</Typography>
							<Button
								type='button'
								color='secondary'
								variant='contained'
								size='small'
								onClick={handleLogOut}
							>
								Log Out
							</Button>
						</React.Fragment>
					) : (
						<React.Fragment>
							<Typography varient='body2' align='center'>
								Welcome Guest!
							</Typography>
							<Button
								component={Link}
								to='/auth'
								type='button'
								color='primary'
								variant='contained'
								size='small'
								onClick={handleLogOut}
								className={classes.button}
							>
								Sign In
							</Button>
						</React.Fragment>
					)}
				</div>
			</AppBar>
		</nav>
	);
};

export default Navbar;
