import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <nav className="h-screen-view fixed hidden inset-0 top-0 z-[var(--z-nav)] bg-white">
            <div className="wrapper h-screen-view mx-auto max-w-3xl border-l border-r border-gray-200">
                <div className="header-top flex h-[var(--height-header)] items-center justify-center border-b border-gray-200">
                    <img className="max-h-[80px] max-w-[150px] object-contain" src="./images/logo.svg" alt="logo" />
                </div>
                <div className="header-body px-12 py-20">
                    <div className="font-secondary mb-8 text-gray-400">Menu</div>

                    <ul className="font-light">
                        <li>
                            <Link to="/">
                                <div className="text-2xl pb-6">Home</div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/products">
                                <div className="text-2xl pb-6">Product</div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/">
                                <div className="text-2xl pb-6">Contact</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
