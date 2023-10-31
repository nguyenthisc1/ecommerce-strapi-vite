import { useReducer } from 'react';
import { LocaleContext, initialState, reducer } from '../context/locales';

export const LocaleProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <LocaleContext.Provider value={{ state, dispatch }}>{children}</LocaleContext.Provider>;
};
