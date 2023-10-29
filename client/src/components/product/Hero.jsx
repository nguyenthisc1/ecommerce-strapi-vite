import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="bg-orange lg:h-[105vh]">
            <div className="wrapper flex h-full pl-10">
                <div className="flex h-full w-2/5 items-center">
                    <div className=" max-w-lg">
                        <h2 className="mb-10 text-2xl font-light md:text-3xl lg:text-4xl">{t('product_page_title')}</h2>

                        <p className="mb-20 font-light">{t('product_page_description')}</p>

                        <Button text={t('button_text')} className={'!px-10 !py-6'} />
                    </div>
                </div>

                <div className="h-full w-3/5">
                    <div className="tt-image h-full">
                        <img className="object-contain" src="/images/img_product_banner.png" alt={t('product_page_title')} />
                    </div>
                </div>
            </div>
        </section>
    );
}
