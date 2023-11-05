import React, { useEffect, useState } from 'react';
import ProductItem from '../Product-item';
import { useQuery } from '@tanstack/react-query';
import productsApi from '../../apis/products.api';

export default function ProductHomeList({ title }) {
    const [products, setProducts] = useState(null);

    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () =>
            await productsApi.getAll({
                populate: 'populate=images',
            }),
    });

    useEffect(() => {
        if (!isLoading) {
            setProducts(data?.data);
        }
    }, [isLoading]);

    return (
        <section className="rounded-t-[48px] bg-primary py-32 text-white">
            <div className="wrapper relative z-10 space-y-32 px-10">
                <div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{title ? title : 'Title'}</h2>
                </div>

                <div className="grid grid-cols-1 gap-x-3 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    {products?.map((item) => (
                        <ProductItem key={item.id} href={`/detail/${item.id}`} className={'!bg-gray-100'} title={item?.attributes.title} description={item?.attributes.description} image={`${HOST}${item?.attributes?.images.data[0].attributes.url}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}
