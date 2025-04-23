import styled from "styled-components";
import { CellType, GridContainerProps } from "@/types/types";

export const TableContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  width: min(90vw, ${(props) => props.cols * 100}px);
  max-height: 80vh;
`;

export const CellItem = styled.div<{
  celltype: CellType;
}>`
  border: 0.5px solid #5dc0c9;
  height: 50px;
  background-color: ${(props) => {
    switch (props.celltype) {
      case CellType.Header:
        return "gray";
      default:
        return "white";
    }
  }};
`;
