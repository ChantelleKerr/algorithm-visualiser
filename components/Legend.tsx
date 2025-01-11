const LegendItem = ({ colour, label }: { colour: string; label: string }) => {
  return (
    <li className="flex items-center gap-1 md:gap-2">
      <div className={`rounded-full md:w-8 md:h-8 ${colour} w-4 h-4`} />
      <span className="text-sm md:text-base">{label}</span>
    </li>
  );
};

interface LegendItems {
  colour: string;
  label: string;
}

interface Props {
  items: LegendItems[];
}

const Legend = ({ items }: Props) => {
  return (
    <ul className="flex justify-center gap-6 m-8">
      {items.map((item, index) => (
        <LegendItem key={index} colour={item.colour} label={item.label} />
      ))}
    </ul>
  );
};

export default Legend;
