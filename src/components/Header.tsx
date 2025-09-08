
import React from 'react';

interface NavLink {
    href: string;
    label: string;
}

interface CTAButton {
    label: string;
    url: string;
}

interface HeaderProps {
    links: NavLink[];
    cta: CTAButton;
}

const Header: React.FC<HeaderProps> = ({ links, cta }) => {
    return (
        <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#29382f] bg-[#111714]/80 px-10 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-4 text-white">
                <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">OpenTech Hackathon</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <nav className="flex items-center gap-9">
                    {links.map((link) => (
                        <a key={link.href} className="text-white text-sm font-medium leading-normal transition-colors hover:text-[#1dc962]" href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>
                <a href={cta.url} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1dc962] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
                    <span className="truncate">{cta.label}</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
