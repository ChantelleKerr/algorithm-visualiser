"use client";
import { BubbleSort } from "@/algorithms/sort/bubbleSort";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Page = () => {
  const [array, setArray] = useState<number[]>([6, 23, 1, 34, 5, 3, 8]);

  const handleClick = () => {
    const arrayCopy = [...array];
    setArray(BubbleSort(arrayCopy));
  };
  return (
    <>
      <Button onClick={handleClick}>Sort</Button>
      <div className="flex flex-row gap-2 justify-center">
        {array.map((number, index) => (
          <div
            key={index}
            className="flex justify-center items-center border w-10 h-10 md:w-20 md:h-20 "
          >
            {number}
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
