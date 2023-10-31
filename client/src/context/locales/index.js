import { createContext } from 'react';

export const LOCALES = {
    EN: 'en',
    VI: 'vi',
};

export const initialState = {
    locale: LOCALES.EN,
};

export const LocaleContext = createContext();

export const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LOCALE': {
            return {
                ...state,
                locale: action.payload.lng,
            };
        }
        default:
            return state;
    }
};



