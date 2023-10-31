import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/dist';
import { GET_PRODUCT } from '../gql/product.gql';

export default function DetailProduct() {
    const { id } = useParams();
    const { data, loading } = useQuery(GET_PRODUCT, {
        variables: { productId: id },
    });

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (!loading && data) {
            setProduct(data?.product.data);
        }
    }, [data, loading]);

    return (
        <>
            {/* <HeroDetail data={product} /> */}
        </>
    );
}
