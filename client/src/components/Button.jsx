import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ href, color, className, text }) {
    return (
        <>
            {!href ? (
                <div className={`transition-color relative inline-block cursor-pointer border px-8 py-2 text-center text-base uppercase tracking-widest duration-[var(--t)] before:absolute before:inset-0 before:z-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-[var(--t)] hover:text-white hover:before:origin-left hover:before:scale-x-100 ${color ? color : 'border-primary text-primary before:bg-primary'}  ${className}`}>
                    <span className="relative z-10">{text}</span>
                </div>
            ) : (
                <Link to={href}>
                    <div className={`transition-color relative inline-block cursor-pointer border px-8 py-2 text-center text-base uppercase tracking-widest duration-[var(--t)] before:absolute before:inset-0 before:z-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-[var(--t)] hover:text-white hover:before:origin-left hover:before:scale-x-100 ${color ? color : 'border-primary text-primary before:bg-primary'}  ${className}`}>
                        <span className="relative z-10">{text}</span>
                    </div>
                </Link>
            )}
        </>
    );
}
