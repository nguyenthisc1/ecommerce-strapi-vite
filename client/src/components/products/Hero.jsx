import React from 'react';
import Button from '../Button';

export default function Hero({ data }) {
    return (
        <section className="bg-orange lg:h-[105vh]">
            <div className="wrapper flex h-full pl-10">
                <div className="flex h-full w-2/5 items-center">
                    <div className=" max-w-lg">
                        <h2 className="mb-10 text-2xl font-light md:text-3xl lg:text-4xl">{data?.hero_title}</h2>

                        <p className="mb-20 font-light">{data?.hero_description}</p>

                        <Button text={data?.cta.title} url={data?.cta.link ? data?.cta.title : null} className={'!px-10 !py-6'} />
                    </div>
                </div>

                <div className="h-full w-3/5">
                    <div className="tt-image h-full">
                        <img className="object-contain" src={`${HOST}${data?.hero_image.data.attributes.url}`} alt={data?.hero_title} />
                    </div>
                </div>
            </div>
        </section>
    );
}
