import {sleep} from '../helpers'

const data = require('../restaurants');

const getByName = async (name) => {
    return {restaurants: data.restaurants.find(restaurant => restaurant.name === name)}
};

const makeRequest = async (url) => {

    await sleep(0); // adjust to simulate request
    switch (url) {
        case('/'):
            return data;
        default:
            return getByName(url)
    }
};

export default makeRequest