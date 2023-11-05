import { axiosClient } from '../libs/axiosClient';

const productsApi = {
    getAll({ populate = '', options }) {
        return axiosClient.get(`/products?${populate}`, options);
    },

    getOneById({ id, populate = '', options }) {
        return axiosClient.get(`/products/${id}?${populate}`, options);
    },
};

export default productsApi;
