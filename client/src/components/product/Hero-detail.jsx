import React from 'react';
import { Link } from 'react-router-dom';
export default function HeroDetail({ images, title, description, quantity }) {
    return (
        <section className="pt-[var(--height-header)] lg:h-screen">
            <div className="wrapper flex h-full space-x-3 p-10">
                <div className="relative flex w-2/5 items-center justify-center rounded-[48px] bg-primary">
                    <Link to="/products">
                        <div className="group absolute left-10 top-10 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-[var(--t)] hover:bg-black">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-black transition-colors group-hover:fill-white" d="M10.5 19.5L11.5575 18.4425L5.8725 12.75H21V11.25H5.8725L11.5575 5.5575L10.5 4.5L3 12L10.5 19.5Z"></path>
                            </svg>
                        </div>
                    </Link>
                    <div className="tt-image h-4/5">
                        <img className="w-full object-contain" src={'/images/img_product.png'} />
                    </div>
                </div>
                <div className="w-3/5 rounded-[48px] bg-gray-100"></div>
            </div>
        </section>
    );
}
