import type { PrizeCardProps } from './PrizeCard';
import PrizeCard from './PrizeCard';

const prizes: Omit<PrizeCardProps, 'place'>[] = [
    {
        title: 'Primer lugar',
        prizeList: [
            '25,000 créditos en AWS',
            '2.500.000 COP en efectivo',
            'La oportunidad de presentar tu proyecto un fondo de inversión.',
        ],
    },
    {
        title: 'Segundo lugar',
        prizeList: [
            '2.000.000 COP en efectivo',
            'La oportunidad de presentar tu proyecto un fondo de inversión.',
        ],
    },
    {
        title: 'Tercer lugar',
        prizeList: [
            'La oportunidad de presentar tu proyecto un fondo de inversión',
        ],
    },
];

const Prizes = () => (
    <section className="scroll-mt-20 px-4 py-16" id="prizes">
        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">Premios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {prizes.map((prize, index) => (
                <PrizeCard key={prize.title} {...prize} place={index + 1} />
            ))}
        </div>

        <p className="mt-8 text-center text-[#9eb7a8]">
            Y muchos más premios sorpresa para los participantes.
        </p>
        <p className="text-[#9eb7a8] text-center mt-12 max-w-3xl mx-auto">
            * Los premios en efectivo pueden estar sujetos a impuestos según las leyes locales.
        </p>
    </section>
);

export default Prizes;
