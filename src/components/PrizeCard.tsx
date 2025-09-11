export interface PrizeCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const PrizeCard = ({ title, description, imageUrl }: PrizeCardProps) => (
    <div className="flex flex-col gap-4 rounded-lg border border-[#3d5245] bg-[#1a241f] p-6 text-center transition-all hover:border-[#1dc962] hover:shadow-lg hover:shadow-[#1dc962]/20">
        <div className="w-full h-40 bg-center bg-no-repeat bg-cover rounded-lg mb-4" style={{ backgroundImage: `url("${imageUrl}")` }}></div>
        <h3 className="text-white text-xl font-bold leading-tight">{title}</h3>
        <p className="text-[#9eb7a8] text-sm font-normal leading-normal">{description}</p>
    </div>
);

export default PrizeCard;