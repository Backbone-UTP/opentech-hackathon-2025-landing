
import React from 'react';

interface CTAButton {
    label: string;
    url: string;
}

interface HeroProps {
    title: string;
    tagline: string;
    cta: CTAButton;
    backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ title, tagline, cta, backgroundImage }) => {
    return (
        <div className="@container">
            <div className="@[480px]:p-4">
                <div
                    className="flex min-h-[480px] flex-col gap-6 rounded-lg bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center p-8"
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("${backgroundImage}")` }}
                >
                    <div className="flex flex-col gap-4 text-center">
                        <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">{title}</h1>
                        <h2 className="text-gray-300 text-lg font-normal leading-normal @[480px]:text-xl @[480px]:font-normal @[480px]:leading-normal max-w-2xl">
                            {tagline}
                        </h2>
                    </div>
                    <a href={cta.url} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-[#1dc962] text-[#111714] text-base font-bold leading-normal tracking-[0.015em] @[480px]:text-lg @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-transform hover:scale-105">
                        <span className="truncate">{cta.label}</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
