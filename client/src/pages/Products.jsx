import React from 'react';
import { useLocale } from '../hooks/useLocales';

export default function Products() {
    const { state } = useLocale();

    return (
        <>
            {/* <Hero data={data?.productsPage.data.attributes} /> */}
            {/* <List title={data?.productsPage.data.attributes.product_list_title} /> */}
        </>
    );
}
