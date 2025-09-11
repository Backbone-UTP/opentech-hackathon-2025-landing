import type { PrizeCardProps } from './PrizeCard';
import PrizeCard from './PrizeCard';

const prizes: PrizeCardProps[] = [
    {
        title: 'Primer lugar',
        description: 'A trip to a tech conference of your choice, up to $5000 in value.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBpDSYFWtd4WWTTfWr7G7k2M6HNLgoDNwluobhWUm_gym7KSDUWUY_Twy3WubuXq9Z8YLwrubMQbBI2We91TkrVHxGgsx6uaqf57rdjJE--XFLy91SchlOIUzjjfIqIIukvBgrqecMV_BjkHTXLI7S199VDKh3h6VMWo_3fKEg9d4Q4Tmix2nQj5zr82NU2TzHJyC55eGYo2_OWWLLwGG5RrxiUyu0STsOPwc3RVUDa9lhjoi2lW-vAuG0QWwWQXP00XTbAvHB1McC',
    },
    {
        title: 'Segundo lugar',
        description: 'A set of high-end tech gadgets, including a laptop and noise-canceling headphones.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_h1N148PJ64LQJd6HWDCQAMlimE6Y4RoAJUk8haa_AsjDiCHkb5Ho--fDwjqaPzCh7aVyiwQBTYAj-ePLh5m0V8xvsU4N-nvyw17TNDJ2IiYWsN53ZN5qDYq9CuI3stEvnjr3xG6w2_fS1Ihqy4EdZgu3jBJ40G9LeBmHuDjXOnu9sMBmvOn9lF8txUw9B6z3dXhgkvwhi_he4gR4dd9kOv8CImvqL_aa3KrLQdhnQMvKvscxBZ3gs-uSOhYKkzU6o8-u9vlvGkRa',
    },
    {
        title: 'Tercer lugar',
        description: 'Gift cards to popular tech stores, totaling $1000.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe9_jBdnGwGQWaAD-nYesxs72_Ovv3q0WsCXKEZJFEmn7uzj9rAT9qhe1837tnSeFklyV1dYg3TKlyj1Ei1mzV3OaVO4CgLe7cv6I9JtxMS98qtMS3cFQpG_IhD3n-CrNdeioM0DlUMtj1r4L-qqQxsZzaN7Ynt1p9ZCZUmCSmYvwysEQACLtZz1gz-HL-SCE26nbZBssCKNqyy_O9TGgoF216C1Lszka5QsvmnsM6vMsw2DkmQ0Wm18pbLJE9WzzPWSpEk4D173lf',
    },
];

const Prizes = () => (
    <section className="scroll-mt-20 px-4 py-16" id="prizes">
        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">Premios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="absolute inset-0 rounded-lg border border-[#3d5245] bg-[#1a241f]/70 backdrop-blur-sm flex items-center justify-center text-white text-lg font-bold p-4"> Más detalles pronto 👀</div>
            {prizes.map((prize) => (
                <PrizeCard key={prize.title} {...prize} />
            ))}
        </div>
    </section>
);

export default Prizes;
