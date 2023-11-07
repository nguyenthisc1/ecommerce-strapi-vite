import { ReactLenis } from '@studio-freight/react-lenis';
import { QueryClientProvider } from '@tanstack/react-query';
import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Hamburger from './components/Hamburger';
import Header from './components/Header';
import Nav from './components/Nav';
import { queryClient } from './libs/reactQueryClient';
import DetailProduct from './pages/Detail-product';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
    const lenisRef = useRef();
    return (
        <QueryClientProvider client={queryClient}>
            <ReactLenis root ref={lenisRef}>
                <Header />
                <Hamburger />
                <Nav />
                <main className="bg-white">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/detail/:id" element={<DetailProduct />} />
                    </Routes>
                </main>
                <Footer />
            </ReactLenis>
        </QueryClientProvider>
    );
}

export default App;
