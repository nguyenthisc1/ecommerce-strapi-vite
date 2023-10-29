import { ReactLenis } from '@studio-freight/react-lenis';
import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Hamburger from './components/header/Hamburger';
import DetailProduct from './pages/Detail-product';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/header/Header';

function App() {
    const lenisRef = useRef();

    return (
        <ReactLenis root ref={lenisRef}>
            <Header />
            <Hamburger />
            <Nav />
            <main className="bg-white">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/detail" element={<DetailProduct />} />
                </Routes>
            </main>
            <Footer />
        </ReactLenis>
    );
}

export default App;
