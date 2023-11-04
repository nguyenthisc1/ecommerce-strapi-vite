import { axiosClient } from '../libs/axiosClient';

const productsApi = {
    getAll({ options, populate = '' }) {
        const url = `/products?${populate}`;
        return axiosClient.get(url, options);
    },
};

export default productsApi;
