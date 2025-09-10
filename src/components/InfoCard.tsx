
import React from 'react';

interface InfoCardProps {
    icon: string;
    title: string;
    description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center gap-4 rounded-lg bg-[#1a241f] p-6">
            <span className="material-symbols-outlined text-4xl text-[#1dc962]">{icon}</span>
            <h3 className="text-white text-xl font-bold">{title}</h3>
            <p className="text-[#9eb7a8] text-sm leading-normal w-[30ch]">{description}</p>
        </div>
    );
};

export default InfoCard;
