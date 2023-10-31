import { useQuery } from '@apollo/client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GET_PRODUCTS } from '../gql/product.gql';
import ProductItem from './Product-item';

export default function ProductHomeList() {
    const { t } = useTranslation();
    const { data, loading } = useQuery(GET_PRODUCTS);
    return (
        <section className="rounded-t-[48px] bg-primary py-32 text-white">
            <div className="wrapper relative z-10 space-y-32 px-10">
                <div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{t('product_home_list_title')}</h2>
                </div>

                <div className="grid grid-cols-1 gap-x-3 gap-y-10 md:grid-cols-2 lg:grid-cols-3">{!loading ? data.products.data.map((item) => <ProductItem key={item.id} href={`/detail/${item.id}`} className={'!bg-gray-100'} title={item.attributes.title} description={item.attributes.description} image={`${HOST}${item.attributes.images.data[0].attributes.url}`} />) : null}</div>
            </div>
        </section>
    );
}
