import React from 'react';
import Button from '../Button';

export default function ProductIntro({ data }) {

    return (
        <section className="relative">
            <div className="grid grid-cols-2">
                <div className="sticky top-0 h-screen">
                    <div className="absolute left-0 top-0 h-screen w-screen">
                        <div className="absolute left-[25%] top-0 h-[33vmin] w-[33vmin] bg-[url('/images/item-lemon-leaves.png')] bg-contain bg-left-top bg-no-repeat"></div>
                        <div className="absolute -left-[2%] top-[100px] h-[16vmin] w-[19vmin] rotate-[56deg] bg-[url('/images/item-leave-3.png')] bg-contain bg-left-top bg-no-repeat blur-[9px]"></div>
                    </div>
                </div>
                <div className="pl-[1vw] pr-[5vw]">
                    <div className="relative flex min-h-screen max-w-lg items-center">
                        <div>
                            <h2 className=" mb-8 font-secondary text-5xl md:text-6xl lg:text-7xl xl:text-8xl"> {data?.product_intro_title}</h2>
                            <p className="mb-4 text-lg font-thin md:text-xl">{data?.product_intro_description} </p>
                            <p className="mb-8 font-normal"> {data?.product_intro_description_2} </p>
                            <Button text={data?.cta.title} href={data?.cta.link ? data?.cta.link : null}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
