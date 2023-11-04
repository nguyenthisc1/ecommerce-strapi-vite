import { axiosClient } from '../libs/axiosClient';

export const homeApi = {
    // getContent({ options, populate = '' }) {
    //     const url = `/home?${populate}`;
    //     return axiosClient.get(url, options);
    // },

    getContent({ options, populate = '' }) {
        return axiosClient.get(`/home?${populate}`, options);
    },
};

// async function getData() {
//     const res = await homeApi.getContent({
//         options: {
//             params: {
//                 locale: state.locale,
//             },
//         },
//         populate: 'populate=cta',
//     });

//     return res.data;
// },
