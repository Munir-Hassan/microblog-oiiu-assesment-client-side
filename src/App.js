import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Post from './components/Form/Post';
import Auth from './components/Auth/Auth';

function App() {
	return (
		<Router>
			<Container maxWidth='lg'>
				<Navbar />
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/post' exact component={Post} />
					<Route path='/auth' exact component={Auth} />
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
