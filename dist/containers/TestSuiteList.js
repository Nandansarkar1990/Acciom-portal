import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: 'bold',
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        color: theme.palette.text.secondary,
    },
    subHeading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: 'bold',
        flexBasis: '40%',
        flexShrink: 0,
    },
    suiteID: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: 'bold',
        flexBasis: '18.33%',
        flexShrink: 0,
    },
    manageConnection: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '23.33%',
        color: 'brown',
    },
    rcorners: {
        border: '2px solid',
        padding: '20px',
        width: '500px',
        borderRadius: '25px',
        boxShadow: '4px',
    },
    status: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '18.33%',
        flexShrink: 0,
    },
    statusImg: { flexBasis: '20%' },
    noRecord: { color: 'red', textAlign: 'center' },
    innerPanelWidth: { width: '950px' },
    statusBg: {
        fontSize: theme.typography.pxToRem(15),
        color: '#2ecca4',
        fontWeight: 'bold'
    },
    statusBgBlue: {
        fontSize: theme.typography.pxToRem(15),
        color: 'blue',
        fontWeight: 'bold'
    },
    statusBgRed: {
        fontSize: theme.typography.pxToRem(15),
        color: 'rgb(245, 124, 76)',
        fontWeight: 'bold'
    },
    statusBgOrange: {
        fontSize: theme.typography.pxToRem(15),
        color: '#F7861B',
        fontWeight: 'bold'
    },
    executionWidth: { width: '20%' },
}));
function ControlledExpansionPanels({ testSuites }) {
    console.log('ControlledExpansionPanels constructor');
    const testSuiteDataLen = testSuites && testSuites.suites ? Object.keys(testSuites.suites).length : 0;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const renderTestStatus = (status) => {
        switch (status) {
            case 0:
                return classes.statusBgBlue;
            case 1:
                return classes.statusBg;
            case 2:
                return classes.statusBgRed;
            case 3:
                return classes.statusBgOrange;
            case 4:
                return classes.statusBgRed;
            default:
                return '';
        }
    };
    return (React.createElement("div", { className: classes.root }, testSuiteDataLen > 0 ?
        testSuites.suites.user.map(testSuite => (React.createElement(ExpansionPanel, { key: testSuite.test_suite_id, expanded: expanded === testSuite.test_suite_id, onChange: handleChange(testSuite.test_suite_id) },
            React.createElement(ExpansionPanelSummary, { expandIcon: React.createElement(ExpandMoreIcon, null), "aria-controls": "panel1bh-content", id: "panel1bh-header" },
                React.createElement(Typography, { className: classes.heading }, testSuite.test_suite_name),
                React.createElement(Typography, { className: classes.manageConnection }, "Manage Connections"),
                React.createElement(Typography, { className: classes.suiteID },
                    "SuiteID:",
                    testSuite.test_suite_id),
                React.createElement(Typography, { className: classes.secondaryHeading },
                    "Uploaded at:  ",
                    testSuite.created)),
            React.createElement(ExpansionPanelDetails, null,
                React.createElement("div", { className: classes.innerPanelWidth }, testSuite.test_case_list.map(testCaseList => (React.createElement(ExpansionPanel, { key: testCaseList.test_case_id },
                    React.createElement(ExpansionPanelSummary, { expandIcon: React.createElement(ExpandMoreIcon, null) },
                        React.createElement(Typography, { className: classes.subHeading }, testCaseList.test_id),
                        React.createElement(Typography, { className: classes.manageConnection }, "View"),
                        React.createElement(Typography, { className: classes.status }, "Status"),
                        React.createElement(Typography, { className: renderTestStatus(testCaseList.test_status) }, testCaseList.test_name)),
                    React.createElement(ExpansionPanelDetails, null,
                        React.createElement("div", { className: classes.rcorners },
                            React.createElement(Table, null,
                                React.createElement(TableHead, null,
                                    React.createElement(TableRow, null,
                                        React.createElement(TableCell, null, "Run ID"),
                                        React.createElement(TableCell, { align: "right" }, "Execution Status"),
                                        React.createElement(TableCell, { align: "right" }, "Execution At"),
                                        React.createElement(TableCell, { align: "right" }, "Log"))),
                                testCaseList.test_case_log.map(testCaseLog => (React.createElement(TableBody, { key: testCaseLog.test_case_log_id },
                                    React.createElement(TableRow, null,
                                        React.createElement(TableCell, { align: "right" }),
                                        React.createElement(TableCell, { align: "right" }, testCaseLog.executed_at),
                                        React.createElement(TableCell, { align: "right" }),
                                        React.createElement(TableCell, { align: "right" })))))))))))))))) : React.createElement("div", { className: classes.noRecord }, "No Test Suite found!")));
}
;
const mapStateToProps = function (state) {
    console.log("TestSuiteList.state", state);
    return {
        testSuites: state.testSuites.testSuiteList
    };
};
export default connect(mapStateToProps)(ControlledExpansionPanels);
//# sourceMappingURL=TestSuiteList.js.map