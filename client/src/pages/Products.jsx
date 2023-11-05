import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import categoryApi from '../apis/category.api';
import { productsPageApi } from '../apis/pages.api';
import productsApi from '../apis/products.api';
import Hero from '../components/products/Hero';
import List from '../components/products/List';
import { useLocale } from '../hooks/useLocales';

export default function Products() {
    const { state } = useLocale();
    const [products, setProducts] = useState(null);
    const [pageContent, setPageContent] = useState(null);
    const [category, setCategory] = useState(null);

    const { data: pageData, isLoading: pageLoading } = useQuery({
        queryKey: ['products-content', state.locale],
        queryFn: async () =>
            await productsPageApi.getContent({
                options: {
                    params: {
                        locale: state.locale,
                    },
                },
                populate: 'populate=cta&[populate]=hero_image',
            }),
    });

    const { data: productsData, isLoading: productsLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () =>
            await productsApi.getAll({
                populate: 'populate=images',
            }),
    });

    const { data: categoryData, isLoading: categoryLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => await categoryApi.getAll({}),
    });

    useEffect(() => {
        if (!pageLoading) {
            setPageContent(pageData?.data.attributes);
        }
    }, [pageLoading, state.locale]);

    useEffect(() => {
        if (!productsLoading) {
            setProducts(productsData?.data);
        }
    }, [productsLoading, productsData]);

    useEffect(() => {
        if (!categoryLoading) {
            setCategory(categoryData?.data);
        }
    }, [categoryLoading, productsData]);

    return (
        <>
            <Hero data={pageContent} />
            <List title={pageContent?.product_list_title} data={products} category={category} />
        </>
    );
}
