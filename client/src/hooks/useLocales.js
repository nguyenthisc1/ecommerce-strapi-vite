import { useContext } from 'react';
import { LocaleContext } from '../context/locales';

export const useLocale = () => useContext(LocaleContext);
