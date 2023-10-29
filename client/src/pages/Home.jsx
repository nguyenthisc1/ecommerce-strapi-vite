import React from 'react';
import Hero from '../components/Hero';
import ProductIntro from '../components/Product-intro';
import ProductHomeList from '../components/Product-home-list';
import Header from '../components/header/Header';
import Hamburger from '../components/header/Hamburger';

export default function Home() {
    return (
        <>
            <Hero />
            <ProductIntro />
            <ProductHomeList />
        </>
    );
}
