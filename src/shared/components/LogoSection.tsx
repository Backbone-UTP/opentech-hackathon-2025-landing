import LogoCard from './LogoCard';
import type { LogoCardProps } from './LogoCard';

interface LogoSectionProps {
    id: string;
    title: string;
    logos: LogoCardProps[];
    gridCols?: string;
}

const LogoSection = ({ id, title, logos, gridCols = "md:grid-cols-3" }: LogoSectionProps) => (
    <section className="scroll-mt-20 px-4 py-16" id={id}>
        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">{title}</h2>
        <div className={`grid grid-cols-2 ${gridCols} gap-8`}>
            {logos.map((logo) => (
                <LogoCard key={logo.alt} {...logo} />
            ))}
        </div>
    </section>
);

export default LogoSection;
