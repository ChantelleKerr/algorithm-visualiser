"use client";

import { useSort } from "@/context/SortProvider";
import Legend from "@/components/Legend";
import { motion } from "framer-motion";

const Page = () => {
  const {
    array,
    swappingIndices,
    pointerIndices,
    pivotIndex,
    partitionIndices,
  } = useSort();

  const legendItems = [
    { colour: "bg-purple", label: "Pointer" },
    { colour: "bg-green", label: "Swapping" },
    { colour: "bg-red", label: "Pivot" },
    { colour: "bg-blue", label: "Partition" },
  ];
  return (
    <>
      <Legend items={legendItems} />
      <div className="flex flex-row justify-center items-center my-11">
        {array.map((number, index) => (
          <div
            key={number}
            className={`p-2 ${
              partitionIndices &&
              index >= partitionIndices[0] &&
              index <= partitionIndices[1]
                ? "bg-blue"
                : ""
            }`}
          >
            <motion.div
              key={number}
              layout
              className={`flex justify-center items-center border w-10 h-10 md:w-20 md:h-20 ${
                swappingIndices?.includes(index)
                  ? "bg-green"
                  : pointerIndices?.includes(index)
                  ? "bg-purple"
                  : pivotIndex === index
                  ? "bg-red"
                  : "bg-white"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                layout: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              {number}
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
