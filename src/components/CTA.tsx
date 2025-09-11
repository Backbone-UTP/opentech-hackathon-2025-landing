interface CtaProps {
    title: string;
    description: string;
    buttonLabel: string;
    buttonUrl: string;
}

const CTA = ({ title, description, buttonLabel, buttonUrl }: CtaProps) => (
    <section className="scroll-mt-20 px-4 py-16 text-center">
        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">{title}</h2>
        <p className="text-[#9eb7a8] text-lg mb-8">{description}</p>
        <a
            className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-[#1dc962] text-[#111714] text-lg font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105"
            href={buttonUrl}
        >
            <span className="truncate">{buttonLabel}</span>
        </a>
    </section>
);

export default CTA;
