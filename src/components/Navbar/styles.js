import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	appBar: {
		// borderRadius: 10,
		marginBottom: '30px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
		padding: '10px 50px'
	},
	heading: {
		color: 'rgba(0,183,255, 1)',
		textDecoration: 'none',
		fontSize: '3rem'
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	profileContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: 'auto'
	},
	button: {
		marginLeft: '10px'
	}
}));
