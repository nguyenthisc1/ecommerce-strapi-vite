import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom/dist';
import { useQuery } from '@tanstack/react-query';
import productsApi from '../apis/products.api';
import HeroDetail from '../components/products/Hero-detail';

export default function DetailProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const { data, isLoading } = useQuery({
        queryKey: ['products', id],
        queryFn: async () =>
            await productsApi.getOneById({
                id,
                populate: 'populate=images&populate=categories',
            }),
    });

    useEffect(() => {
        if (!isLoading) {
            setProduct(data?.data);
        }
    }, [isLoading, data]);

    return (
        <>
            <HeroDetail data={product} />
        </>
    );
}
