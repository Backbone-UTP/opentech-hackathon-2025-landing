export interface AgendaItemProps {
    title: string;
    date: string;
    description: string;
    isCurrent: boolean;
    isPast: boolean;
}

const AgendaItem = ({ title, date, description, isCurrent, isPast }: AgendaItemProps) => {
    const itemClasses = `mb-12 p-2 rounded-lg transition-all duration-300 ${isPast ? 'opacity-50' : 'opacity-100 hover:scale-105'} ${isCurrent ? 'border-2 border-[#1dc962] bg-[#1dc962]/[0.1]' : ''}`;
    const titleClasses = `text-xl font-bold leading-tight text-white`;

    return (
        <div className={itemClasses}>
            <h3 className={titleClasses}>{title}</h3>
            <p className="text-[#9eb7a8] text-sm font-normal leading-normal mt-2">{date}</p>
            <p className="text-white text-base mt-4">{description}</p>
        </div>
    );
};

export default AgendaItem;