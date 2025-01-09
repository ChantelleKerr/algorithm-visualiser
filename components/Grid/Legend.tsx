const LegendItem = ({ colour, label }: { colour: string; label: string }) => {
  return (
    <li className="flex items-center gap-1 md:gap-2">
      <div className={`rounded-full md:w-8 md:h-8 ${colour} w-4 h-4`} />
      <span className="text-sm md:text-base">{label}</span>
    </li>
  );
};

const Legend = () => {
  const nodeTypes = [
    { colour: "bg-green", label: "Start" },
    { colour: "bg-red", label: "End" },
    { colour: "bg-purple", label: "Path" },
    { colour: "bg-black", label: "Wall" },
    { colour: "bg-blue", label: "Visited" },
    { colour: "bg-white", label: "Unvisited" },
  ];

  return (
    <ul className="flex justify-center gap-6 m-8">
      {nodeTypes.map((node, index) => (
        <LegendItem key={index} colour={node.colour} label={node.label} />
      ))}
    </ul>
  );
};

export default Legend;
