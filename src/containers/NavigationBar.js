import React from 'react';
import { Link } from 'react-router-dom'
import { Route, BrowserRouter as Router  } from 'react-router-dom'

import '../css/NavigationBar.css'

import Startup from '../containers/Startup';
import Home from '../containers/Home';
import Dashboard from '../containers/Dashboard';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import SvgIcon from '@material-ui/core/SvgIcon';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemIcon from '@material-ui/core/ListItemIcon';

// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//   },
//   drawerOpen: {
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerClose: {
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: theme.spacing(7) + 1,
//     [theme.breakpoints.up('sm')]: {
//       width: theme.spacing(9) + 1,
//     },
//   },
//   toolbar: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

// function HomeIcon(props) {
// 	return (
// 	  <SvgIcon {...props}>
// 		<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
// 	  </SvgIcon>
// 	);
// }



function NavigationBar() {
		// const classNamees = useStyles();
		// const theme = useTheme();
		// const [open, setOpen] = React.useState(false);

		// function handleDrawerOpen() {
		// 	setOpen(true);
		// }

		// function handleDrawerClose() {
		// 	setOpen(false);
		// }

		// return (
		// 	<div classNameName={classNamees.root}>
		// 		<CssBaseline />
		// 		<AppBar
		// 			position="fixed"
		// 			classNameName={clsx(classNamees.appBar, {
		// 			[classNamees.appBarShift]: open,
		// 			})}
		// 		>
		// 			<Toolbar>
		// 			<IconButton
		// 				color="inherit"
		// 				aria-label="Open drawer"
		// 				onClick={handleDrawerOpen}
		// 				edge="start"
		// 				classNameName={clsx(classNamees.menuButton, {
		// 				[classNamees.hide]: open,
		// 				})}
		// 			>
		// 				<MenuIcon />
		// 			</IconButton>
		// 			<Typography variant="h6" noWrap>
		// 				Acciom
		// 			</Typography>
		// 			</Toolbar>
		// 		</AppBar>
		// 		<Drawer
		// 			variant="permanent"
		// 			classNameName={clsx(classNamees.drawer, {
		// 			[classNamees.drawerOpen]: open,
		// 			[classNamees.drawerClose]: !open,
		// 			})}
		// 			classNamees={{
		// 			paper: clsx({
		// 				[classNamees.drawerOpen]: open,
		// 				[classNamees.drawerClose]: !open,
		// 			}),
		// 			}}
		// 			open={open}
		// 		>
		// 			<div classNameName={classNamees.toolbar}>
		// 			<IconButton onClick={handleDrawerClose}>
		// 				{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
		// 			</IconButton>
		// 			</div>
		// 			<Divider />
		// 			<List>
		// 				<MenuList>
		// 					<MenuItem>
		// 					<ListItemIcon>
		// 						<HomeIcon classNameName={classNamees.icon} color="primary" />
		// 					</ListItemIcon>
		// 						<Link to={`/`}> Dashboard </Link> <br />
		// 					</MenuItem>
		// 					<MenuItem>
		// 					<ListItemIcon>
		// 						<PriorityHighIcon />
		// 					</ListItemIcon>
		// 						<Link to={`/home`}> Home </Link> <br />
		// 					</MenuItem>
		// 					<MenuItem>
		// 					<ListItemIcon>
		// 						<DraftsIcon />
		// 					</ListItemIcon>
		// 						<Link to={`/startup`}>Startup</Link>
		// 					</MenuItem>
		// 				</MenuList>
		// 			</List>
		// 		</Drawer>
		// 	</div>
		// );

		const toggleSideBar = () => {
			console.log("Hello Suresh");
			$('#sidebar').toggleClass('active');
		};

		return (
			<div className="wrapper">
				<nav id="sidebar">
					<div className="sidebar-header">
						<h3>Acciom</h3>
					</div>

					<ul className="list-unstyled components">
						<li>
							<Link to={`/`}> Dashboard </Link> <br />
						</li>
						<li>
							<Link to={`/home`}> Home </Link> <br />
						</li>
						<li>
							<Link to={`/startup`}>Startup</Link>
						</li>
					</ul>
            	</nav>
				<div id="content">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="container-fluid">

							<button type="button" onClick={toggleSideBar} id="sidebarCollapse" className="btn btn-info">
								<i className="fas fa-align-left"></i>
								<span>Toggle Sidebar</span>
							</button>
						</div>
					</nav>

					<Route path="/" exact component={Dashboard} />
					<Route path="/startup" component={Startup} />
					<Route path="/home" component={Home} />
				</div>
			</div>
		)
}

 export default NavigationBar;