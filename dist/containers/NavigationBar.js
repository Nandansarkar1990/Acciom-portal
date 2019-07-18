import React from 'react';
import '../css/NavigationBar.css';
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
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("nav", { id: "sidebar" },
            React.createElement("div", { className: "sidebar-header" },
                React.createElement("h3", null, "Acciom")),
            React.createElement("ul", { className: "list-unstyled components" },
                React.createElement("li", { className: "active" },
                    React.createElement("a", { href: "#homeSubmenu", "data-toggle": "collapse", "aria-expanded": "false" },
                        React.createElement("i", { className: "glyphicon glyphicon-home" }),
                        "Home")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#" },
                        React.createElement("i", { className: "glyphicon glyphicon-paperclip" }),
                        "FAQ")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#" },
                        React.createElement("i", { className: "glyphicon glyphicon-send" }),
                        "Startup")))),
        React.createElement("nav", { className: "navbar navbar-expand-lg navbar-light bg-light" },
            React.createElement("div", { className: "container-fluid" },
                React.createElement("button", { type: "button", id: "sidebarCollapse", className: "btn btn-info" },
                    React.createElement("i", { className: "fas fa-align-left" }),
                    React.createElement("span", null, "Toggle Sidebar")),
                React.createElement("button", { className: "btn btn-dark d-inline-block d-lg-none ml-auto", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                    React.createElement("i", { className: "fas fa-align-justify" })),
                React.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                    React.createElement("ul", { className: "nav navbar-nav ml-auto" }))))));
}
export default NavigationBar;
//# sourceMappingURL=NavigationBar.js.map