"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { Cell, CellType } from "@/types/types";

interface DPTableContextType {
  table: Cell[][];
  createTable: React.Dispatch<React.SetStateAction<Cell[][]>>;
  coins: number[];
  target: number;
}

const TableContext = createContext<DPTableContextType | undefined>(undefined);

export const TableProvider = ({ children }: { children: React.ReactNode }) => {
  const [table, setTable] = useState<Cell[][]>([]);
  const target: number = 11;
  const [coins, setCoins] = useState<number[]>([1, 5, 6, 9]);

  const createTable = () => {
    const newTable: Cell[][] = [];
    for (let i = 0; i <= coins.length; i++) {
      const row = [];
      for (let j = 0; j <= target; j++) {
        row.push({
          value: j === 0 ? 0 : i === 0 ? Infinity : Infinity,
          type: CellType.Blank,
        });
      }
      newTable.push(row);
    }

    setTable(newTable);
  };

  // TODO: Update The Table

  return (
    <TableContext.Provider
      value={{
        table,
        createTable,
        coins,
        target,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTable must be used within a TableProvider");
  }
  return context;
};
