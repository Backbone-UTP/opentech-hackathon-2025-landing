import LogoSection from '../shared/components/LogoSection';
import type { LogoCardProps } from '../shared/components/LogoCard';

import AvanalcheLogo from '../assets/sponsors/avalanche.webp';
import DailyBotLogo from '../assets/sponsors/dailybot.webp';
import ElHubVenturesLogo from '../assets/sponsors/elhubventures.webp';
import UTPLogo from '../assets/sponsors/utp_eng.webp';

const sponsorLogos: LogoCardProps[] = [
    {
        src: AvanalcheLogo,
        alt: 'Avalanche Network',
        href: 'https://www.avax.network/',
        isGrayscale: true,
    },
    {
        src: DailyBotLogo,
        alt: 'DailyBot',
        href: 'https://dailybot.com/',
        isGrayscale: true,
    },
    {
        src: ElHubVenturesLogo,
        alt: 'ElHub Ventures',
        href: 'https://elhub.ventures/',
        isGrayscale: true,
    },
    {
        src: UTPLogo,
        alt: 'Universidad Tecnológica de Pereira',
        href: 'https://www.utp.edu.co/',
        isGrayscale: true,
    }
];

const Sponsors = () => (
    <LogoSection
        id="sponsors"
        title="Patrocinadores"
        logos={sponsorLogos}
    />
);

export default Sponsors;
