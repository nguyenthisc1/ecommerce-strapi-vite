import { Link } from 'react-router-dom';

export default function Header({ className }) {
    return (
        <header className={`${className} fixed top-0 z-[var(--z-header)] h-[var(--height-header)] w-full mix-blend-difference `}>
            <div className="wrapper flex h-full items-center justify-between px-10">
                <div className="h-4/5 w-full max-w-[160px]">
                    <Link to="/">
                        <img className="h-full w-full object-contain" src="/images/logo.svg" alt="logo" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
