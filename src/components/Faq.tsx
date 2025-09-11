import FaqItem from './FaqItem';
import type { FaqItemProps } from './FaqItem';

const faqData: FaqItemProps[] = [
    {
        question: '¿Cuál es el tema del hackathon?',
        answer: "El tema es la creación de startups y soluciones innovadoras que integren tecnologías emergentes como Blockchain e Inteligencia Artificial.",
        isOpen: true,
    },
    {
        question: '¿Cuáles son los criterios de evaluación?',
        answer: 'Los proyectos serán evaluados en función de la innovación, funcionalidad, diseño, impacto y adherencia a las temáticas. Se proporcionarán estos detalles a los equipos antes del evento.',
    },
    {
        question: '¿Puedo llegar con una idea?',
        answer: 'Sí, puedes llegar con una idea siempre y cuando esté alineada con las temáticas del evento. De hecho hay premios adicionales para los equipos que presenten ideas innovadoras.',
    },
    {
        question: '¿Cuánto cuesta participar?',
        answer: 'El evento es totalmente gratuito para todos los participantes.',
    },
    {
        question: 'No tengo equipo, ¿puedo participar?',
        answer: 'Sí, todos son bienvenidos. Sin embargo, es importante que los equipos estén formados por al menos 3 miembros. Si no tienes equipo, puedes inscribirte de forma individual y serás asignado a un equipo de manera aleatoria.',
    },
    {
        question: '¿Qué pasa si no tengo experiencia en IA o Blockchain?',
        answer: 'No te preocupes. El hackathon está diseñado para ser inclusivo. Habrá mentores disponibles para ayudarte y guiarte durante el evento, independientemente de tu nivel de experiencia.',
    },
];

const Faq = () => (
    <section className="scroll-mt-20 px-4 py-16" id="faq">
        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">Preguntas Frecuentes</h2>
        <div className="flex flex-col gap-4">
            {faqData.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
            ))}
        </div>
    </section>
);

export default Faq;
