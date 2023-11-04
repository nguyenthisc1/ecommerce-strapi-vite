import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { homeApi } from '../apis/pages.api';
import Hero from '../components/Hero';
import ProductIntro from '../components/Product-intro';
import { useLocale } from '../hooks/useLocales';

export default function Home() {
    const { state } = useLocale();
    const [homeContent, setHomeContent] = useState(null);

    const { data, isLoading } = useQuery({
        queryKey: ['home-content', state.locale],
        queryFn: async () =>
            await homeApi.getContent({
                options: {
                    params: {
                        locale: state.locale,
                    },
                },
                populate: 'populate=cta',
            }),
    });

    useEffect(() => {
        if (!isLoading) {
            setHomeContent(data?.data.attributes);
        }
    }, [isLoading, state.locale]);

    return (
        <>
            <Hero data={homeContent} />
            <ProductIntro data={homeContent} />
            {/* <ProductHomeList title={homeContent?.product_list_title} /> */}
        </>
    );
}
