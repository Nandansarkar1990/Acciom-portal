import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cards from './card';
import Charts from './Charts';
const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(10),
    },
    toolbar: Object.assign({ display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 8px" }, theme.mixins.toolbar),
}));
function Dashboard() {
    const classes = useStyles();
    return (React.createElement("div", null,
        React.createElement("main", { className: classes.content },
            React.createElement("div", { className: classes.toolbar }),
            React.createElement(Cards, null),
            React.createElement(Charts, null))));
}
export default Dashboard;
//# sourceMappingURL=Dashboard.js.map