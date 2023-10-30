import React from 'react';
import Hero from '../components/product/Hero';
import List from '../components/product/List';
import { useFetch } from '../hooks/useFetch';

export default function Products() {

    const {data, loading} = useFetch('http://localhost:1337/api/products/')
    console.log("🚀 ~ file: Products.jsx:9 ~ Products ~ state:", loading)

    return (
        <>

            <Hero />
            <List />
        </>
    );
}
