import type { RuleItemProps } from './RuleItem';
import RuleItem from './RuleItem';

const rules: RuleItemProps[] = [
    { text: 'Los participantes deben ser mayores de edad.' },
    { text: 'Los equipos serán de 3 a 5 miembros.' },
    { text: 'El problema será asignado y/o aprobado antes del inicio del hackathon.' },
    { text: 'Todo el código debe ser original y adherirse al problema.' },
    { text: 'Al final del evento, se debe entregar código fuente, documentación y presentación con demo funcional' },
    { text: 'Los criterios de evaluación incluyen innovación, funcionalidad, presentación y alineación con las temáticas.' },
    { text: 'Toda solución desarrollada en la hackathon tendrá licencia GNU AGPL.' },
    { text: 'Todos los participantes deben aceptar y respetar el código de conducta.' },
];

const Rules = () => (
    <section className="scroll-mt-20 px-4 py-16" id="rules">
        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">Reglas</h2>
        <ul className="space-y-4">
            {rules.map((rule) => (
                <RuleItem key={rule.text} {...rule} />
            ))}
        </ul>
    </section>
);

export default Rules;
