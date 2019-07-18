import { LOAD_TEST_SUITES } from '../constants/ActionTypes';
const initialState = {
    testSuiteList: []
};
const testSuites = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TEST_SUITES:
            // console.log('reducer: testSuites.LOAD_TEST_SUITES ==>', action);
            return Object.assign({}, state, { testSuiteList: action.testSuiteList });
        default:
            // console.log('reducer: testSuites.default ==>');
            return state;
    }
};
export default testSuites;
//# sourceMappingURL=testSuites.js.map