export interface CommunityLogoProps {
    src: string;
    alt: string;
}

const CommunityLogo = ({ src, alt }: CommunityLogoProps) => (
    <img alt={alt} className="size-40 object-contain p-4 rounded-lg border border-white bg-gray-800/30" src={src} />
);

export default CommunityLogo;