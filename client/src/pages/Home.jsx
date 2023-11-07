import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { homePageApi } from '../apis/pages.api';
import Hero from '../components/home/Hero';
import ProductHomeList from '../components/home/Product-home-list';
import ProductIntro from '../components/home/Product-intro';
import { useLocale } from '../hooks/useLocales';

export default function Home() {
    const { state } = useLocale();
    const [homeContent, setHomeContent] = useState(null);
    const { data, isSuccess } = useQuery({
        queryKey: ['home-content', state.locale],
        queryFn: async () =>
            await homePageApi.getContent({
                options: {
                    params: {
                        locale: state.locale,
                    },
                },
                populate: 'populate=cta',
            }),
    });

    useEffect(() => {
        if (isSuccess) {
            setHomeContent(data?.data.attributes);
        }
    }, [isSuccess, state.locale]);

    return (
        <>
            <Hero data={homeContent} />
            <ProductIntro data={homeContent} />
            <ProductHomeList title={homeContent?.product_list_title} />
        </>
    );
}
