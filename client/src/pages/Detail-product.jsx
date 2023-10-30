import React from 'react';
import HeroDetail from '../components/product/Hero-detail';
import { useParams } from 'react-router-dom/dist';
import { useFetch } from '../hooks/useFetch';

export default function DetailProduct() {
    const params = useParams()
    const { data, loading } = useFetch(`${HOST_API}/products/${params.id}`);
    return (
        <>
            <HeroDetail />
        </>
    );
}
