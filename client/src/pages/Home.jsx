import { useQuery } from '@apollo/client';
import React from 'react';
import Hero from '../components/Hero';
import { GET_HOME_CONTENT } from '../gql/pages.gql';
import { useLocale } from '../hooks/useLocales';
export default function Home() {
    const { state } = useLocale();
    const { data, loading } = useQuery(GET_HOME_CONTENT, {
        variables: { locale: state.locale },
    });

    return (
        <>
            <Hero data={data?.home.data.attributes} />
            {/* <ProductIntro /> */}
            {/* <ProductHomeList /> */}
        </>
    );
}
