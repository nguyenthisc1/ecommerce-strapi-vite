import { ReactLenis } from '@studio-freight/react-lenis';
import { useRef } from 'react';
import Header from './components/header/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Hamburger from './components/header/Hamburger';

function App() {
    const lenisRef = useRef();

    return (
        <ReactLenis root ref={lenisRef}>
            <Header />
            <Hamburger />
            <Nav />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </ReactLenis>
    );
}

export default App;
