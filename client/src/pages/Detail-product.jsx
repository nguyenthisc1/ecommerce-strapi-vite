import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/dist';

export default function DetailProduct() {
    const { id } = useParams();


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
