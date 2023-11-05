import { axiosClient } from '../libs/axiosClient';

const categoryApi = {
    getAll({ populate = '', options }) {
        return axiosClient.get(`/categories?${populate}`, options);
    },
};

export default categoryApi;
