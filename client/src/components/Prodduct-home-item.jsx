import React from 'react';
import { Link } from 'react-router-dom';
export default function ProductHomeItem({ title, description, image, className, href }) {
    return (
        <div className={`group relative overflow-hidden rounded-[48px] bg-white ${className}`}>
            <Link to={href ? href : '/'}>
                <div className="product-bg pointer-events-none absolute inset-0 z-0 overflow-hidden">
                    <svg className="h-full w-full scale-0 transition-transform duration-[0.5s] ease-[cubic-bezier(.7,.97,.55,.95)] group-hover:scale-[2]" viewBox="0 0 1006 1006" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="503" cy="503" r="503" fill="#ECF2FC"></circle>
                        <circle cx="503.5" cy="502.5" r="270.398" fill="white" stroke="#74E2E5" strokeWidth="0.203688"></circle>
                        <circle cx="503" cy="503" r="219" fill="#66DD99"></circle>
                        <circle cx="503" cy="503" r="166" fill="#F6ED6C"></circle>
                        <circle cx="503" cy="503" r="113.898" fill="white" stroke="#74E2E5" strokeWidth="0.203688"></circle>
                    </svg>
                </div>
                <div className="relative z-10 space-y-20 px-6 py-10">
                    <div className="space-y-8 text-center text-black">
                        <p className="text-3xl font-light tracking-widest">{title}</p>
                        <p className="font-light">{description}</p>
                    </div>
                    <div>
                        <div className="tt-image">
                            <img className="w-full object-contain" src={image} alt={title} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
