import Axios from 'axios';
import { setupCache, buildMemoryStorage } from 'axios-cache-interceptor';
const axios = setupCache(Axios, {
    storage: buildMemoryStorage(localStorage, 'axios-cache:'),
});

export const axiosClient = axios.create({
    baseURL: HOST_API,
    timeout: 1000,
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Cache-Control': 'no-cache',
    //     'Access-Control-Allow-Origin': '*',
    //     'Accept-Language': 'vn',
    // },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);