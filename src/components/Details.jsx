import React from 'react';

const Details = () => {
  const player1Wins = localStorage.getItem('player1_wins') || 0;
  const player2Wins = localStorage.getItem('player2_wins') || 0;

  return (
    <div>
      <h1>The History of Players' Wins</h1>
      <div>Player 1 has won {player1Wins} times</div>
      <div>Player 2 has won {player2Wins} times</div>
    </div>
  );
};

export default Details;
