import SocialLinks from './SocialLinks';

import BackboneLogo from '../assets/supporters/backbone.webp';

const Footer = () => (
    <footer className="border-t border-solid border-t-[#29382f]">
        <div className="mx-auto max-w-[960px] px-5 py-10">
            <div className="flex flex-col items-center justify-center gap-6 text-center">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                    <a className="text-[#9eb7a8] text-base font-normal leading-normal transition-colors hover:text-[#1dc962]" href="/code-of-conduct">Código de Conducta</a>
                    <a className="text-[#9eb7a8] text-base font-normal leading-normal transition-colors hover:text-[#1dc962]" href="/terms-of-event">Términos del Evento</a>
                </div>
                <SocialLinks />
                <span className='flex items-center gap-2'>
                    <p className="text-[#9eb7a8] text-sm font-normal leading-normal">Diseñado y desarrollado por
                    </p>
                    <a href="https://github.com/Backbone-UTP" target='_blank' rel='noopener noreferrer'>
                        <img className="inline-block h-4" src={BackboneLogo} alt="Backbone Logo" />
                    </a>
                </span>
            </div>
        </div>
    </footer>
);

export default Footer;
