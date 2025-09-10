
import InfoCard from './InfoCard';

const aboutItems = [
    {
        icon: 'emoji_objects',
        title: 'Temática',
        description: 'Crear usando Blockchain / IA',
    },
    {
        icon: 'location_on',
        title: 'Lugar',
        description: 'Universidad Tecnológica de Pereira \n Auditorio Ciencias de la Salud',
    },
    {
        icon: 'calendar_month',
        title: 'Fecha',
        description: 'Oct - 11 - 2025',
    },
];
const About = () => {
    return (
        <section className="scroll-mt-20 px-4 py-16" id="about">
            <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">Acerca del Evento</h2>
            <p className="text-[#9eb7a8] text-center mb-12 max-w-3xl mx-auto">
                La <b>Open Tech Hackathon</b> tiene como propósito principal impulsar la creación de nuevas ideas y proyectos tecnológicos que puedan convertirse en startups o soluciones de impacto.
                <br />
                Buscamos fomentar la innovación tecnológica a través del desarrollo de proyectos que integren <b>IA</b> y <b>Blockchain</b>, potenciando la región como un polo de innovación.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {aboutItems.map((item) => (
                    <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
                ))}
            </div>
        </section>
    );
};

export default About;
