import React from 'react';
import { connect } from 'react-redux';
import { getAllTestSuites } from '../actions';
import TestSuiteList from './TestSuiteList';
const loadData = props => {
    console.log('Startup.loadData() ==>', props);
    props.getAllTestSuites();
};
class Startup extends React.Component {
    componentDidMount() {
        console.log('Startup.componentDidMount() ===>');
        loadData(this.props);
    }
    render() {
        console.log('Startup.render() ==> ', this.props);
        return (React.createElement("div", null,
            React.createElement("h1", null, "Start up..."),
            React.createElement(TestSuiteList, null)));
    }
}
const mapDispatchToProps = dispatch => ({
    getAllTestSuites: () => dispatch(getAllTestSuites())
});
export default connect(null, mapDispatchToProps)(Startup);
//# sourceMappingURL=Startup.js.map