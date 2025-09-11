export interface LogoCardProps {
    src: string;
    alt: string;
    href?: string;
    isGrayscale?: boolean;
}

const LogoCard = ({ src, alt, href, isGrayscale = false }: LogoCardProps) => {
    const imageClasses = [
        "w-full h-24 bg-contain bg-center bg-no-repeat transition-all",
        isGrayscale ? "grayscale hover:grayscale-0" : "",
    ].join(" ");

    const containerClasses = [
        "flex items-center justify-center p-4",
        isGrayscale ? "" : "border border-gray-400 bg-white/10 rounded-lg",
    ].join(" ");

    const image = (
        <div className={containerClasses}>
            <div role="img" aria-label={alt} className={imageClasses} style={{ backgroundImage: `url("${src}")` }}></div>
        </div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {image}
            </a>
        );
    }

    return image;
};

export default LogoCard;
