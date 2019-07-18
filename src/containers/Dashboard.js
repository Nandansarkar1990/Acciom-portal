import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Cards from './card'
import Charts from './Charts'



const useStyles = makeStyles(theme => ({
	content: {
	  flexGrow: 1,
	  padding: theme.spacing(0),
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar
	},
}));
function Dashboard (){
	const classes = useStyles();
	return (
		<div>
			<Cards />
			<Charts />
		</div>
	)
}

 export default Dashboard;
