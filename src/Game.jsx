import { useState } from 'react';
import './App.css';
import Board from './components/Board.jsx';
import PlayerTern from './components/PlayerTern.jsx';
import CheckHistory from './components/CheckHistory.jsx';


function Game() {
  const [diceResult, setDiceResult] = useState(0);
  const [PlayerPosition, setPlayerPosition] = useState([1, 1]);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const snakes = { 16: 6, 49: 26, 87: 24, 93: 73, 95: 75, 98: 78, 1: 1 };
  const ladders = { 1: 38, 4: 14, 9: 31, 36: 44, 51: 67, 71: 91 };

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceResult(result);

    const newPosition = [...PlayerPosition];
    newPosition[currentPlayer] += result;

    if (newPosition[currentPlayer] > 100) {
      newPosition[currentPlayer] = 100;
      
    } else if (snakes[newPosition[currentPlayer]]) {
      newPosition[currentPlayer] = snakes[newPosition[currentPlayer]];
    } else if (ladders[newPosition[currentPlayer]]) {
      newPosition[currentPlayer] = ladders[newPosition[currentPlayer]];
    }

    if (newPosition[currentPlayer] === 100) {
      alert(`The player ${currentPlayer + 1} has won!`);

      const winnerKey = `player${currentPlayer + 1}_wins`;
      const previousWins = parseInt(localStorage.getItem(winnerKey)) || 0;
      localStorage.setItem(winnerKey, previousWins + 1);

      setPlayerPosition([1, 1]);
      setDiceResult(0);
      return;
    }

    setPlayerPosition(newPosition);
    setCurrentPlayer((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div>
      <Board PlayerPosition={PlayerPosition} />
      <button className="button" onClick={rollDice}>
        Roll Dice
      </button>
      <CheckHistory />
      <div className="number">{`Number is: ${diceResult}`}</div>
      <PlayerTern current_player={currentPlayer} />
    </div>
  );
}



export default Game;
