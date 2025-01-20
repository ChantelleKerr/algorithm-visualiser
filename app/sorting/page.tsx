"use client";

import { useSort } from "@/context/SortProvider";
import Legend from "@/components/Legend";
import { motion } from "framer-motion";

const Page = () => {
  const { array, swappingIndices, pointerIndices } = useSort();

  const legendItems = [
    { colour: "bg-purple", label: "Pointers" },
    { colour: "bg-green", label: "Swapping" },
  ];
  return (
    <>
      <Legend items={legendItems} />
      <div className="flex flex-row gap-2 justify-center items-center my-11">
        {array.map((number, index) => (
          <motion.div
            key={number}
            layout
            className={`flex justify-center items-center border w-10 h-10 md:w-20 md:h-20 ${
              swappingIndices?.includes(index)
                ? "bg-green"
                : pointerIndices?.includes(index)
                ? "bg-purple"
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
        ))}
      </div>
    </>
  );
};

export default Page;
