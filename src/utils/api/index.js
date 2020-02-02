import { sleep } from '../helpers'

const data = require('../restaurants');

const makeRequest = async (url) => {

    await sleep(300); // simulating a request
    return data;
};

export default makeRequest