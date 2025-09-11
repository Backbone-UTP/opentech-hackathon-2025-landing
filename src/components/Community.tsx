import type { CommunityLogoProps } from './CommunityLogo';
import CommunityLogo from './CommunityLogo';
import BackboneLogo from '../assets/supporters/backbone.webp';
import CincoLogo from '../assets/supporters/cinco.webp';
import FLISoL from '../assets/supporters/flisol.webp';
import QAConfLogo from '../assets/supporters/qaconf.webp';
import UTPLogo from '../assets/supporters/utp.webp';

const logos: CommunityLogoProps[] = [
    { src: BackboneLogo, alt: 'Backbone' },
    { src: CincoLogo, alt: 'Cinco' },
    { src: FLISoL, alt: 'FLISoL' },
    { src: QAConfLogo, alt: 'QAConf' },
    { src: UTPLogo, alt: 'UTP' },
];

const Community = () => (
    <section className="scroll-mt-20 px-4 py-16" id="community">
        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">Comunidades Organizadoras</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((logo) => (
                <CommunityLogo key={logo.alt} {...logo} />
            ))}
        </div>
    </section>
);

export default Community;
