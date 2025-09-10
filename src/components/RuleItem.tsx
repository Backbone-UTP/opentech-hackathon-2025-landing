export interface RuleItemProps {
    text: string;
}

const RuleItem = ({ text }: RuleItemProps) => (
    <li className="list-disc list-inside text-white text-base font-normal leading-normal marker:text-[#1dc962]">
        {text}
    </li>
);

export default RuleItem;