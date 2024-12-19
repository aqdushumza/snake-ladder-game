import React from 'react';
import Cell from './Cell.jsx';

const Board = ({ PlayerPosition }) => { 
  let counter = 100;
  const twoDArray = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => counter--)
  );

  return (
    <div className="board">
      {twoDArray.map((row, rowIndex) => (
        <div className="one-row" key={rowIndex}>
          {row.map((col, colIndex) => {
            let marker = '';
            if (PlayerPosition[0] === col) marker += 'P1';
            if (PlayerPosition[1] === col) marker += 'P2';
            

            return <Cell key={colIndex} value={col} player={marker} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;
