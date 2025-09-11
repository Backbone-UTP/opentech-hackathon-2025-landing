import LogoSection from '../shared/components/LogoSection';
import type { LogoCardProps } from '../shared/components/LogoCard';

import AvanalcheLogo from '../assets/sponsors/avalanche.webp';
import DailyBotLogo from '../assets/sponsors/dailybot.webp';

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
];

const Sponsors = () => (
    <LogoSection
        id="sponsors"
        title="Sponsors"
        logos={sponsorLogos}
    />
);

export default Sponsors;
