import React from "react";
import styled from "@emotion/styled";

const SquareWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 90px;
  cursor: pointer;
  border: 1px solid black;
`;

const Square = ({ onClick, value }) => (
  <SquareWrapper onClick={onClick}>{value}</SquareWrapper>
);

export default Square;
