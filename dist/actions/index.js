import { testSuitesAPI } from '../apis/index';
import { LOAD_TEST_SUITES } from "../constants/ActionTypes";
const loadTestSuites = testSuiteList => ({
    type: LOAD_TEST_SUITES,
    testSuiteList
});
export const getAllTestSuites = () => dispatch => {
    testSuitesAPI.getAllTestSuites(testSuiteList => {
        // console.log('Actions.getAlltestSuites==>', testSuiteList);
        dispatch(loadTestSuites(testSuiteList));
    });
};
const getAllConnectionsSuccess = connectionsList => ({
    type: GET_ALL_CONNECTIONS_SUCCESS,
    connectionsList
});
const getAllConnectionsError = error => ({
    type: GET_ALL_CONNECTIONS_ERROR,
    error
});
// export const getAllConnections = (suite_id) => dispatch => {
// 	fetch(`${this.url}/connection-detail/${suite_id}`,{
// 		method: 'get',
// 		headers: {
// 		  'Accept': 'application/json, text/plain, */*',
// 		  'Content-Type': 'application/json'
// 		})
// 	.then(res => res.json())
// 	.then(res => {
// 		if(res.error) {
// 			throw(res.error);
// 		}
// 		dispatch(getAllConnectionsSuccess(res.data));
// 		// return res.data;
// 	})
// 	.catch(error => {
// 		dispatch(getAllConnectionsError(error));
// 	})
// }
//# sourceMappingURL=index.js.map