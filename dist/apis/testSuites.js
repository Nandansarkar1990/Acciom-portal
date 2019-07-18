/**
 * Mocking client-server processing
 */
import _testSuitesData from './testSuitesData.json';
const TIMEOUT = 100;
export default {
    getAllTestSuites: (cb, timeout) => setTimeout(() => cb(_testSuitesData), timeout || TIMEOUT)
};
//# sourceMappingURL=testSuites.js.map