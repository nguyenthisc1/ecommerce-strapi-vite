import React from 'react';
import { useTranslation } from 'react-i18next';
import ProdductHomeItem from '../Prodduct-home-item';

export default function List() {
    const { t } = useTranslation();

    return (
        <section className="relative z-10 -mt-[5vh] rounded-t-[48px] bg-white py-32">
            <div className="wrapper relative z-10 space-y-32 px-10">
                <div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{t('product_home_list_title')}</h2>
                </div>
                <div className=" md:flex md:space-x-5 lg:space-x-10">
                    <div className="relative md:w-[300px]">
                        <div className="sticky top-[calc(var(--height-header)_+_40px)] space-y-2 ">
                            <div className="text-orange flex cursor-pointer justify-between border-b border-gray-300 pb-2">
                                <span>Juice</span>
                                <span>(3)</span>
                            </div>

                            <div className="flex cursor-pointer justify-between border-b border-gray-300 py-2">
                                <span>Juice</span>
                                <span>(3)</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-x-3 gap-y-10 md:w-[calc(100%_-_300px)]">
                        <ProdductHomeItem className={'bg-gray-100'} title="Lemon and mint" description="Pack of 6 bottles (33cl.)" image="/images/img_product.png" />
                        <ProdductHomeItem className={'bg-gray-100'} title="Lemon and mint" description="Pack of 6 bottles (33cl.)" image="/images/img_product.png" />
                        <ProdductHomeItem className={'bg-gray-100'} title="Lemon and mint" description="Pack of 6 bottles (33cl.)" image="/images/img_product.png" />
                        <ProdductHomeItem className={'bg-gray-100'} title="Lemon and mint" description="Pack of 6 bottles (33cl.)" image="/images/img_product.png" />
                        <ProdductHomeItem className={'bg-gray-100'} title="Lemon and mint" description="Pack of 6 bottles (33cl.)" image="/images/img_product.png" />
                        <ProdductHomeItem className={'bg-gray-100'} title="Lemon and mint" description="Pack of 6 bottles (33cl.)" image="/images/img_product.png" />
                        <ProdductHomeItem className={'bg-gray-100'} title="Lemon and mint" description="Pack of 6 bottles (33cl.)" image="/images/img_product.png" />
                        <ProdductHomeItem className={'bg-gray-100'} title="Lemon and mint" description="Pack of 6 bottles (33cl.)" image="/images/img_product.png" />
                        <ProdductHomeItem className={'bg-gray-100'} title="Lemon and mint" description="Pack of 6 bottles (33cl.)" image="/images/img_product.png" />
                    </div>
                </div>
            </div>
        </section>
    );
}
