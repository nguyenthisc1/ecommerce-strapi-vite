import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_CATEGORY, GET_PRODUCTS } from '../../gql/product.gql';
import ProductItem from '../Product-item';

export default function List({ title }) {
    const { data: getProducts, loading: loadingProducts } = useQuery(GET_PRODUCTS, {
        variables: { filters: 'Juice' },
    });
    const { data: getCategories, loading: loadingCategories } = useQuery(GET_CATEGORY);

    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        if (!loadingProducts && getProducts) {
            setProducts({
                data: getProducts.products.data,
                pagination: getProducts.products.meta.pagination,
            });
        }
    }, [loadingProducts, getProducts]);

    useEffect(() => {
        if (!loadingCategories && getCategories) {
            setCategories({
                data: getCategories.categories.data,
            });
        }
    }, [loadingCategories, getCategories]);

    return (
        <section className="relative z-10 -mt-[5vh] rounded-t-[48px] bg-white py-32">
            <div className="wrapper relative z-10 space-y-32 px-10">
                <div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{title ? title : 'Title'}</h2>
                </div>
                <div className=" md:flex md:space-x-5 lg:space-x-10">
                    <div className="relative md:w-[300px]">
                        <div className="sticky top-[calc(var(--height-header)_+_40px)] space-y-2 ">
                            <div className="flex cursor-pointer justify-between border-b border-gray-300 pb-2 text-orange">
                                <span>All</span>
                                <span>(3)</span>
                            </div>
                            {categories?.data.map((category) => (
                                <div key={category.id} className="flex cursor-pointer justify-between border-b border-gray-300 pb-2">
                                    <span>{category.attributes.name}</span>
                                    <span>(3)</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-x-3 gap-y-10 md:w-[calc(100%_-_300px)]">
                        {products?.data.map((item) => (
                            <ProductItem key={item.id} href={`/detail/${item.id}`} className={'!bg-gray-100'} title={item.attributes.title} description={item.attributes.description} image={`${HOST}${item.attributes.images.data[0].attributes.url}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
