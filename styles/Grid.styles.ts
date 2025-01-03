import styled from "styled-components";
import { NodeType, NodeStatus, GridContainerProps } from "@/types/types";

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);

  padding: 10px;
  max-width: 80vw;
`;

export const GridItem = styled.div<{
  nodetype: NodeType;
  nodestatus: NodeStatus;
}>`
  border: 0.5px solid black;
  height: 50px;
  background-color: ${(props) => {
    switch (props.nodetype) {
      case NodeType.Start:
        return "#72D094";
      case NodeType.End:
        return "#EB7575";
      case NodeType.Obstacle:
        return "black";
      case NodeType.Path:
        return "#847996";
      case NodeType.Blank:
      default:
        switch (props.nodestatus) {
          case NodeStatus.Seen:
            return "#4ECDC4";
          case NodeStatus.Unseen:
          default:
            return "#292F36";
        }
    }
  }};
`;
