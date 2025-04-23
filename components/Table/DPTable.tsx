import { useTable } from "@/context/DPTableProvider";
import React, { useEffect } from "react";
import { CellItem, TableContainer } from "./Table.styles";
import { Button } from "../ui/button";
import { CellType } from "@/types/types";

const DPTable = () => {
  const { table, createTable, coins, target } = useTable();

  useEffect(() => {
    createTable();
  }, [coins, target]);

  return (
    <div>
      <p> Coin Change Problem</p>
      <p>Target: {target}</p>
      <p> Coins: {coins.join(" - ")}</p>
      <Button> Start Algo</Button>

      <TableContainer rows={coins.length + 1} cols={target + 2}>
        <CellItem celltype={CellType.Header} />

        {/* Column headers (0 to target) */}
        {Array.from({ length: target + 1 }).map((_, colIndex) => (
          <CellItem key={`header-col-${colIndex}`} celltype={CellType.Header}>
            <p>{colIndex}</p>
          </CellItem>
        ))}

        {table.map((row, rowIndex) => (
          <>
            {/* Row headers for coins */}
            <CellItem key={`header-row-${rowIndex}`} celltype={CellType.Header}>
              <p>{rowIndex === 0 ? "—" : coins[rowIndex - 1]}</p>
            </CellItem>

            {row.map((cell, colIndex) => (
              <CellItem key={`${rowIndex}-${colIndex}`} celltype={cell.type}>
                <p>{cell.value}</p>
              </CellItem>
            ))}
          </>
        ))}
      </TableContainer>
    </div>
  );
};

export default DPTable;
