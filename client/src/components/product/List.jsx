import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFetch } from '../../hooks/useFetch';
import ProductHomeItem from '../Prodduct-home-item';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../gql/product.gql';


export default function List() {
    const { t } = useTranslation();
    const { data, loading } = useQuery(GET_PRODUCTS);
    console.log("🚀 ~ file: List.jsx:25 ~ List ~ data:", data,loading)


    return (
        <section className="relative z-10 -mt-[5vh] rounded-t-[48px] bg-white py-32">
            <div className="wrapper relative z-10 space-y-32 px-10">
                <div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{t('product_home_list_title')}</h2>
                </div>
                <div className=" md:flex md:space-x-5 lg:space-x-10">
                    <div className="relative md:w-[300px]">
                        <div className="sticky top-[calc(var(--height-header)_+_40px)] space-y-2 ">
                            <div className="flex cursor-pointer justify-between border-b border-gray-300 pb-2 text-orange">
                                <span>Juice</span>
                                <span>(3)</span>
                            </div>

                            <div className="flex cursor-pointer justify-between border-b border-gray-300 py-2">
                                <span>Juice</span>
                                <span>(3)</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-3 gap-x-3 gap-y-10 md:w-[calc(100%_-_300px)]">{!loading ? data.data.map((item) => <ProductHomeItem key={item.id} href={`/detail/${item.id}`} className={'!bg-gray-100'} title={item.attributes.title} description={item.attributes.description} image="/images/img_product.png" />) : null}</div> */}
                </div>
            </div>
        </section>
    );
}
