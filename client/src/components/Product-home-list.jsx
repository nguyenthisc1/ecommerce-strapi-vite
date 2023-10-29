import React from 'react';
import { useTranslation } from 'react-i18next';
import ProdductHomeItem from './Prodduct-home-item';

export default function ProductHomeList() {
    const { t } = useTranslation();
    return (
        <section className="bg-primary rounded-t-[48px] py-32 text-white">
            <div className="wrapper relative z-10 space-y-32 px-10">
                <div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{t('product_home_list_title')}</h2>
                </div>

                <div className="grid grid-cols-1 gap-x-3 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    <ProdductHomeItem title="Lemon and mint" description="Pack of 6 bottles (33cl.)" image="/images/img_product.png" />
                    <ProdductHomeItem title="Lemon and mint" description="Pack of 6 bottles (33cl.)" image="/images/img_product.png" />
                    <ProdductHomeItem title="Lemon and mint" description="Pack of 6 bottles (33cl.)" image="/images/img_product.png" />
                </div>
            </div>
        </section>
    );
}
