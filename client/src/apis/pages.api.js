import { axiosClient } from '../libs/axiosClient';

export const homePageApi = {
    getContent({ populate = '', options }) {
        return axiosClient.get(`/home?${populate}`, options);
    },
};

export const productsPageApi = {
    getContent({ populate = '', options }) {
        return axiosClient.get(`/products-page?${populate}`, options);
    },
};
