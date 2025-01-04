interface Props {
  algorithm?: string;
  description?: string;
  pseudocode?: string;
}

const AlgorithmInformation = ({
  algorithm,
  description,
  pseudocode,
}: Props) => {
  return (
    <>
      {algorithm && (
        <div className="py-4 flex flex-col gap-3">
          <h1 className="text-lg">{algorithm}</h1>
          <h2 className="text-sm">Description</h2>
          <p>{description}</p>
          <h2 className="text-sm">Pseudocode</h2>
          <pre>
            <code className="text-xs">{pseudocode}</code>
          </pre>
        </div>
      )}
    </>
  );
};

export default AlgorithmInformation;
