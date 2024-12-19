import React from 'react';
import '../App.css';

const Cell = ({ value, player }) => {
  return (
    <div className="cell">
      {value}  {player}
    </div>
  );
};

export default Cell;
