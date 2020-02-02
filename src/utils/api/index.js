import {sleep} from '../helpers'

const data = require('../restaurants');

const getByName = async (name) => {
    return data.restaurants.find(restaurant => restaurant.name === name)
};

const makeRequest = async (url) => {

    await sleep(300); // simulating a request
    switch (url) {
        case('/'):
            return data;
        default:
            return getByName(url) // TODO: add get by restaurant name

    }
};

export default makeRequest