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
        date: 'Septiembre 11-30, 2025',
        description: 'Inscripciones abiertas para participantes individuales y equipos.',
        startDate: new Date('2025-09-11T00:00:00'),
        endDate: new Date('2025-09-30T23:59:59'),
    },
    {
        title: 'Presentación de Jurados',
        date: 'Octubre 6, 2025',
        description: 'Conocerás los jurados y los criterios de evaluación. Se recomienda a los participantes asistir para entender mejor lo que se espera de sus proyectos.',
        startDate: new Date('2025-10-06T00:00:00'),
        endDate: new Date('2025-10-06T23:59:59'),
    },
    {
        title: 'Formación de Equipos',
        date: 'Octubre 8, 2025',
        description: 'Serán anunciados los equipos seleccionados. Si te inscribiste de forma individual, serás asignado a un equipo de manera aleatoria.',
        startDate: new Date('2025-10-08T00:00:00'),
        endDate: new Date('2025-10-08T23:59:59'),
    },
    {
        title: 'Asignación de Problemas',
        date: 'Octubre 10, 2025',
        description: 'Cada equipo recibirá un problema o desafío relacionado con IA y Blockchain para abordar durante el hackathon.',
        startDate: new Date('2025-10-10T00:00:00'),
        endDate: new Date('2025-10-10T23:59:59'),
    },
    {
        title: 'Hackathon',
        date: 'Octubre 11, 2025 - 8:00 AM - 4:00 PM',
        description: 'Trabajarás intensamente en tu proyecto, con acceso a mentores y recursos para ayudarte a desarrollar tu solución.',
        startDate: new Date('2025-10-11T08:00:00'),
        endDate: new Date('2025-10-11T16:00:00'),
    },
    {
        title: 'Pitch Final y Premiación',
        date: 'Octubre 11, 2025 - 4:00 PM - 5:00 PM',
        description: 'Tendrás 3 minutos para presentar tu proyecto ante el jurado y 5 minutos para preguntas. Los ganadores serán anunciados al final del evento.',
        startDate: new Date('2025-10-11T16:00:00'),
        endDate: new Date('2025-10-11T17:00:00'),
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
