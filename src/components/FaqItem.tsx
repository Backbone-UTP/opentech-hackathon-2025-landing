export interface FaqItemProps {
    question: string;
    answer: string;
    isOpen?: boolean;
}

const FaqItem = ({ question, answer, isOpen = false }: FaqItemProps) => (
    <details className="rounded-lg border border-[#3d5245] bg-[#1a241f] p-4 group" open={isOpen}>
        <summary className="flex cursor-pointer items-center justify-between gap-6 text-white text-base font-medium leading-normal">
            {question}
            <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
        </summary>
        <p className="text-[#9eb7a8] text-sm font-normal leading-normal mt-4">{answer}</p>
    </details>
);

export default FaqItem;
