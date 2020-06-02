import React from "react";
import Square from "../Square/Square";
import styled from "@emotion/styled";

const Root = styled.div`
  margin: 20px auto;
`;

const BoardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  margin: 0 auto;
  width: 276px;
`;

const Reset = styled.div`
  cursor: pointer;
`;

const errorMessage = {
  color: "red",
};

const SQUARE_NUM = 9;
const Board = () => {
  const [selectedSquare, setSelectedSquare] = React.useState(
    Array(SQUARE_NUM).fill(null)
  );
  const [showError, setShowError] = React.useState("");
  const [isSecondPlayer, setIsSecondPlayer] = React.useState(false);

  const handleSquareClick = (i) => {
    setShowError("");
    const arr = [...selectedSquare];

    arr[i] = isSecondPlayer ? "Y" : "X";

    if (selectedSquare[i] === null) {
      setSelectedSquare(arr);
      setIsSecondPlayer(!isSecondPlayer);
    } else {
      setShowError("Please choose another field, already taken");
    }
  };

  const resetUI = () => {
    setSelectedSquare(Array(SQUARE_NUM).fill(null));
  };

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  React.useEffect(() => {
    const isWinner = (selectedSquare) => {
      for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];

        if (
          (selectedSquare[a] === "X" &&
            selectedSquare[b] === "X" &&
            selectedSquare[c] === "X") ||
          (selectedSquare[a] === "Y" &&
            selectedSquare[b] === "Y" &&
            selectedSquare[c] === "Y")
        ) {
          alert(`${selectedSquare[a]} won`);
          resetUI();
        }
      }
    };

    isWinner(selectedSquare);
  }, [selectedSquare, winningCombinations]);

  return (
    <Root>
      <h1>Tic tac toe</h1>
      <BoardWrapper>
        {selectedSquare.map((_square, i) => (
          <Square
            key={i}
            onClick={() => handleSquareClick(i)}
            value={selectedSquare[i] !== null ? selectedSquare[i] : ""}
          />
        ))}
      </BoardWrapper>
      {showError && <div style={errorMessage}>{showError}</div>}
      <Reset onClick={() => resetUI()}>Reset</Reset>
    </Root>
  );
};

export default Board;
