/**
 * Mocking client-server processing
 */
import _testSuitesData from './testSuitesData.json';

const TIMEOUT = 100;

export const testSuitesAPI =  {
	// getAllTestSuites: (cb, timeout) => setTimeout(() => cb(_testSuitesData), timeout || TIMEOUT),
	getAllTestSuites: (cb, timeout) => {
		setTimeout( function() {
			console.log('inside timeout');
			cb(_testSuitesData);
		}, timeout || TIMEOUT);
	},
	updateCaseDetails:(cb, timeout) => setTimeout(() => cb({}), timeout || TIMEOUT),	
};

export const connectionsAPI = {
	getAllConnections: (suite_id, cb) => setTimeout(() => cb({}), timeout || TIMEOUT),




	
	selectConnections:(cb, timeout) => setTimeout(() => cb({}), timeout || TIMEOUT),
	checkConnection:(cb, timeout) => setTimeout(() => cb({}), timeout || TIMEOUT),
}