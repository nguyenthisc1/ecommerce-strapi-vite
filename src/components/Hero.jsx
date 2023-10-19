import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="home-hero min-h-screen pb-[3%] pt-40">
            <div className="container">{t('hero_title')}</div>
        </section>
    );
}
