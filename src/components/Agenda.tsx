import { useState, useEffect } from 'react';
import type { AgendaItemProps } from './AgendaItem';
import AgendaItem from './AgendaItem';

interface AgendaItemData extends Omit<AgendaItemProps, 'isCurrent' | 'isPast'> {
    startDate: Date;
    endDate: Date;
}

const agendaItemsData: AgendaItemData[] = [
    {
        title: 'Apertura de Inscripciones',
        date: 'Septiembre 11, 2025',
        description: 'Inscripciones abiertas para participantes individuales y equipos.',
        startDate: new Date('2025-09-11T00:00:00-05:00'),
        endDate: new Date('2025-09-11T23:59:59-05:00'),
    },
    {
        title: 'Bootcamp Blockchain - Parte I',
        date: 'Septiembre 22 - Septiembre 26, 2025',
        description: 'Introducción a los conceptos básicos de Blockchain usando Avalanche y ecosistema Web3, Ideal para quienes son nuevos en estos temas.',
        startDate: new Date('2025-09-22T14:00:00-05:00'),
        endDate: new Date('2025-09-26T23:59:59-05:00'),
    },
    {
        title: 'Cierre de Inscripciones',
        date: 'Septiembre 30, 2025',
        description: 'Último día para inscribirse en el hackathon. Asegúrate de completar tu registro antes de esta fecha.',
        startDate: new Date('2025-09-30T00:00:00-05:00'),
        endDate: new Date('2025-09-30T23:59:59-05:00'),
    },
    {
        title: 'Bootcamp Blockchain - Parte II',
        date: 'Septiembre 29 - Octubre 3, 2025',
        description: 'Introducción a Remix, Solidity, y desarrollo de smart contracts en la blockchain de Avalanche.',
        startDate: new Date('2025-09-29T14:00:00-05:00'),
        endDate: new Date('2025-10-03T23:59:59-05:00'),
    },
    {
        title: 'Workshop: Vibe Coding e IA',
        date: 'Octubre 4, 2025 - 9:00 AM - 10:00 AM',
        description: 'Sesión especial sobre Vibe Coding e Inteligencia Artificial (IA) para inspirar y guiar a los participantes en la integración de estas tecnologías en sus proyectos.',
        startDate: new Date('2025-10-04T09:00:00-05:00'),
        endDate: new Date('2025-10-04T10:00:00-05:00'),
    },
    {
        title: 'Workshop: MCP',
        date: 'Octubre 4, 2025 - Por confirmar',
        description: 'Sesión especial sobre Metodologías de Creación de Proyectos (MCP) para ayudarte a estructurar tu idea y proyecto.',
        startDate: new Date('2025-10-04T10:00:00-05:00'),
        endDate: new Date('2025-10-04T11:00:00-05:00'),
    },
    {
        title: 'Asignación de Problemas y Formación de Equipos',
        date: 'Octubre 5, 2025',
        description: 'Cada equipo recibirá un problema o desafío relacionado con IA y Blockchain para abordar durante el hackathon.',
        startDate: new Date('2025-10-05T00:00:00-05:00'),
        endDate: new Date('2025-10-05T23:59:59-05:00'),
    },
    {
        title: 'Kickoff Hackathon',
        date: 'Octubre 06, 2025 - 8:00 AM - Octubre 11, 2025 - 4:00 PM',
        description: 'Trabajarás intensamente en tu proyecto, con acceso a mentores y recursos para ayudarte a desarrollar tu solución.',
        startDate: new Date('2025-10-06T08:00:00-05:00'),
        endDate: new Date('2025-10-11T16:00:00-05:00'),
    },
    {
        title: 'Presentación de Jurados',
        date: 'Octubre 10, 2025',
        description: 'Conocerás los jurados y los criterios de evaluación. Se recomienda a los participantes asistir para entender mejor lo que se espera de sus proyectos.',
        startDate: new Date('2025-10-10T00:00:00-05:00'),
        endDate: new Date('2025-10-10T23:59:59-05:00'),
    },
    {
        title: 'Pitch Final y Premiación',
        date: 'Octubre 11, 2025 - 4:00 PM - 5:00 PM',
        description: 'Tendrás 3 minutos para presentar tu proyecto ante el jurado y 5 minutos para preguntas. Los ganadores serán anunciados al final del evento.',
        startDate: new Date('2025-10-11T16:00:00-05:00'),
        endDate: new Date('2025-10-11T17:00:00-05:00'),
    },
];

const Agenda = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        setNow(new Date());
        const timer = setInterval(() => setNow(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="scroll-mt-20 px-4 py-16" id="agenda">
            <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">Hackathon Agenda</h2>
            <div className="relative border-l-2 border-dashed border-[#3d5245] pl-8">
                {agendaItemsData.map((item) => {
                    const isPast = now > item.endDate;
                    const isCurrent = now >= item.startDate && now <= item.endDate;
                    const dotClass = isCurrent ? 'bg-[#1dc962] scale-125' : isPast ? 'bg-gray-500' : 'bg-[#1dc962]';

                    return (
                        <div key={item.title} className="relative">
                            <div className={`absolute -left-[41px] h-4 w-4 rounded-full transition-all duration-300 ${dotClass}`} style={{ top: '4px' }}></div>
                            <AgendaItem {...item} isCurrent={isCurrent} isPast={isPast} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Agenda;
