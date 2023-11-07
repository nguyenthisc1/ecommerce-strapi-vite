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
    const [selectedCategory, setSelectedCategory] = useState('');

    const { data: pageData, isLoading: pageLoading } = useQuery({
        queryKey: ['products-content', state.locale],
        queryFn: async () =>
            await productsPageApi.getContent({
                options: {
                    params: {
                        locale: state.locale,
                    },
                },
                populate: 'populate=cta&populate=hero_image',
            }),
    });

    const { data: productsData, isSuccess: productsSuccess } = useQuery({
        queryKey: ['products'],
        queryFn: async () =>
            await productsApi.getAll({
                populate: 'populate=categories&populate=images',
            }),
    });

    const { data: categoryData, isLoading: categoryLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () =>
            await categoryApi.getAll({
                populate: 'populate=products',
            }),
    });

    useEffect(() => {
        if (!pageLoading) {
            setPageContent(pageData?.data.attributes);
        }
    }, [pageLoading, state.locale, pageData]);

    useEffect(() => {
        if (productsSuccess) {
            setProducts(productsData.data);
        }
    }, [productsSuccess, productsData]);

    useEffect(() => {
        if (!categoryLoading) {
            setCategory(categoryData?.data);
        }
    }, [categoryLoading, categoryData]);

    return (
        <>
            <Hero data={pageContent} />
            <List title={pageContent?.product_list_title} data={products} category={category} selectCategory={setSelectedCategory} filter={selectedCategory} />
        </>
    );
}
