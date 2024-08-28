import React, { useState } from 'react';
import "./TicTac.css";
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];

const TicTac = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [winnerMessage, setWinnerMessage] = useState(""); // State for the winner message

  const toggle = (e, num) => {
    if (lock) {
      return;
    }
    if (data[num] !== "") {
      return; // Prevent overwriting of already selected box
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${cross_icon}" alt="X" />`;
      data[num] = "X";
    } else {
      e.target.innerHTML = `<img src="${circle_icon}" alt="O" />`;
      data[num] = "O";
    }
    setCount(count + 1);
    checkwin(); // Make sure to call checkwin after updating the count
  };

  const checkwin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[2]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[0]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[2]);
    }
  };

  const won = (winner) => {
    setLock(true);
    setWinnerMessage(`Congratulations! Player ${winner} wins!`);
  };

  return (
    <div className='container'>
      <h1 className='tittle'>TicTacToe In <span>React</span></h1>
      <div className='board'>
        <div className='row1'>
          <div className='boxes' onClick={(e) => toggle(e, 0)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 1)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className='row2'>
          <div className='boxes' onClick={(e) => toggle(e, 3)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 4)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className='row3'>
          <div className='boxes' onClick={(e) => toggle(e, 6)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 7)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      {winnerMessage && <h2 className='winner-message'>{winnerMessage}</h2>}
      <button className='reset' onClick={() => window.location.reload()}>Reset</button>
    </div>
  );
};

export default TicTac;
