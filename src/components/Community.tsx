import LogoSection from '../shared/components/LogoSection';
import type { LogoCardProps } from '../shared/components/LogoCard';
import BackboneLogo from '../assets/supporters/backbone.webp';
import CincoLogo from '../assets/supporters/cinco.webp';
import FLISoL from '../assets/supporters/flisol.webp';
import QAConfLogo from '../assets/supporters/qaconf.webp';
import ForestLogo from '../assets/supporters/forest.webp';
import SiriusLogo from '../assets/supporters/sirius.webp';
import UbuntuColombiaLogo from '../assets/supporters/ubuntu-colombia.webp';
import JointLogo from '../assets/supporters/joint.webp';

const logos: LogoCardProps[] = [
    { src: BackboneLogo, alt: 'Backbone' },
    { src: CincoLogo, alt: 'Cinco' },
    { src: FLISoL, alt: 'FLISoL' },
    { src: QAConfLogo, alt: 'QAConf' },
    { src: ForestLogo, alt: 'Forest' },
    { src: SiriusLogo, alt: 'Sirius' },
    { src: UbuntuColombiaLogo, alt: 'Ubuntu Colombia' },
    { src: JointLogo, alt: 'Joint' },
];

const Community = () => (
    <LogoSection
        id="community"
        title="Organizadores"
        logos={logos}
    />
);

export default Community;
