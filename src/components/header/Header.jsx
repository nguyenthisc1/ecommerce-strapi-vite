import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="fixed top-0 h-[100px] w-full ">
            <div className="container flex h-full items-center justify-between">
                <div className="h-4/5 w-full max-w-[160px]">
                    <Link to="/">
                        <img className="h-full w-full object-contain" src="/images/logo.svg" alt="logo" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
