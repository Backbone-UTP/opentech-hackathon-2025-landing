import React from 'react';
import Header from './Header';
import Footer from './Footer';

const navLinks = [
    { href: '/#about', label: 'Acerca' },
    { href: '/#agenda', label: 'Agenda' },
    { href: '/#rules', label: 'Reglas' },
    { href: '/#prizes', label: 'Premios' },
    { href: '/#community', label: 'Comunidad' },
    { href: '/#sponsors', label: 'Patrocinadores' },
    { href: '/#faq', label: 'FAQ' },
];

const ctaButton = {
    label: 'Registrarse',
    url: 'https://forms.gle/aZGFr3ZhDPMdY4ga7',
};

const MainLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111714] dark group/design-root overflow-x-hidden scroll-smooth" style={{ fontFamily: "'Space Grotesk', 'Noto Sans', sans-serif" }}>
        <div className="layout-container flex h-full grow flex-col">
            <Header links={navLinks} cta={ctaButton} />
            <main className="flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    </div>
);

export default MainLayout;
