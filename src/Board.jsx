import React from "react";
import { board, pieces } from "./state";
import { nanoid } from "nanoid";

function getPieceName(value) {
  const piece = pieces[value] || "";
  return piece.substring(0, 1);
}

const Cell = ({ piece, color }) => {
  return <button className={`cell ${color}`}>{getPieceName(piece)}</button>;
};

export const Board = () => {
  const renderCell = (row, col) => {
    const id = nanoid();

    let color = "";

    color =
      (row % 2 === 0 && col % 2 !== 0) || (row % 2 !== 0 && col % 2 === 0)
        ? "dark"
        : "";

    return <Cell key={id} color={color} piece={board[row][col]} />;
  };

  const rows = new Array(8).fill("");
  const cols = new Array(8).fill("");

  return (
    <div className="">
      {rows.map((p, rIdx) => (
        <div className="board-row" key={rIdx}>
          {cols.map((p, cIdx) => {
            return renderCell(rIdx, cIdx);
          })}
        </div>
      ))}
    </div>
  );
};
