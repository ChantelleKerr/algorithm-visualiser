const LegendItem = ({ colour, label }: { colour: string; label: string }) => {
  return (
    <li className="flex items-center gap-2">
      <div className={`rounded-full w-8 h-8 ${colour}`} />
      <span>{label}</span>
    </li>
  );
};

const Legend = () => {
  const nodeTypes = [
    { colour: "bg-start", label: "Start" },
    { colour: "bg-end", label: "End" },
    { colour: "bg-path", label: "Path" },
    { colour: "bg-wall", label: "Wall" },
    { colour: "bg-visited", label: "Visited" },
    { colour: "bg-white", label: "Unvisited" },
  ];

  return (
    <ul className="flex justify-center gap-6 mb-8">
      {nodeTypes.map((node, index) => (
        <LegendItem key={index} colour={node.colour} label={node.label} />
      ))}
    </ul>
  );
};

export default Legend;
