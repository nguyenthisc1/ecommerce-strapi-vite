import { ReactLenis } from '@studio-freight/react-lenis';
import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Hamburger from './components/header/Hamburger';
import Header from './components/header/Header';
import DetailProduct from './pages/Detail-product';
import Home from './pages/Home';
import Products from './pages/Products';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

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
