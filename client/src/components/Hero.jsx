import React from 'react';

export default function Hero(props) {
    return (
        <section className="home-hero relative mb-[20vh] min-h-[80vh] overflow-hidden pb-[10vh] pt-40 2xl:min-h-[90vh]">
            <div className="container">
                <div className="text-primary mx-auto w-4/5 text-center lg:mt-20 2xl:mt-0">
                    <h1 className=" mb-8 text-6xl font-medium uppercase leading-[1.4] md:text-[6vw] ">{props?.data?.hero_title}</h1>
                    <p className=" text-lg font-thin md:text-2xl">{props?.data?.hero_description}</p>
                </div>
            </div>

            <div className="absolute right-0 top-0 h-[22vmax] w-[15vmax] bg-[url('/images/item-leaves-right-1.png')] bg-[auto_100%] bg-left-top bg-no-repeat"></div>
            <div className="absolute left-[10%] top-1/3 h-[5vmax] w-[10vmax] bg-[url('/images/item-leave-3.png')] bg-contain bg-center bg-no-repeat blur-[9px]"></div>
            <div className="absolute bottom-[10%] right-[5%] h-[11vmax] w-[15vmax] bg-[url('/images/item-leave-1.png')] bg-contain bg-center bg-no-repeat blur-[9px]"></div>
            <div className="pointer-events-none absolute bottom-0 left-0 select-none text-center max-sm:hidden">
                <p className="hero-text whitespace-nowrap text-[20vmax] lowercase leading-none text-black/0 2xl:text-[16vmax]">{props?.data?.hero_text_horizontal}</p>
            </div>
        </section>
    );
}
