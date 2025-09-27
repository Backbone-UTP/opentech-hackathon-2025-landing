
export interface PrizeCardProps {
    title: string;
    prizeList: string[];
    place: number;
}

const PrizeCard = ({ title, prizeList, place }: PrizeCardProps) => {
    const getMedalInfo = (): { emoji: string; gradient: string } | null => {
        switch (place) {
            case 1:
                return { emoji: '🥇', gradient: 'from-yellow-400 to-orange-500' };
            case 2:
                return { emoji: '🥈', gradient: 'from-gray-400 to-gray-500' };
            case 3:
                return { emoji: '🥉', gradient: 'from-orange-400 to-yellow-600' };
            default:
                return null;
        }
    };

    const medalInfo = getMedalInfo();

    return (
        <div className="flex flex-col gap-4 rounded-lg border border-[#3d5245] bg-[#1a241f] p-6 text-center transition-all hover:border-[#1dc962] hover:shadow-lg hover:shadow-[#1dc962]/20">
            {medalInfo && (
                <div className={`flex justify-center items-center w-full h-40 rounded-lg mb-4 bg-gradient-to-br ${medalInfo.gradient}`}>
                    <span className="text-6xl">{medalInfo.emoji}</span>
                </div>
            )}
            <h3 className="text-white text-xl font-bold leading-tight">{title}</h3>
            {prizeList.map((item, index) => (
                <p key={index} className="text-[#9eb7a8] text-sm font-normal leading-normal">{item}</p>
            ))}
        </div>
    );
};

export default PrizeCard;