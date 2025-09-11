import LogoSection from '../shared/components/LogoSection';
import type { LogoCardProps } from '../shared/components/LogoCard';
import BackboneLogo from '../assets/supporters/backbone.webp';
import CincoLogo from '../assets/supporters/cinco.webp';
import FLISoL from '../assets/supporters/flisol.webp';
import QAConfLogo from '../assets/supporters/qaconf.webp';
import UTPLogo from '../assets/supporters/utp.webp';

const logos: LogoCardProps[] = [
    { src: BackboneLogo, alt: 'Backbone' },
    { src: CincoLogo, alt: 'Cinco' },
    { src: FLISoL, alt: 'FLISoL' },
    { src: QAConfLogo, alt: 'QAConf' },
    { src: UTPLogo, alt: 'UTP' },
];

const Community = () => (
    <LogoSection
        id="community"
        title="Comunidades Organizadoras"
        logos={logos}
        gridCols="md:grid-cols-5"
    />
);

export default Community;
