import React from 'react';
import { useState } from 'react';

export const SignIn = ({ onSignin, setCurPlayer, setPlayerNames }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [errmsg, setErrmsg] = useState('');
  const [players, setPlayers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!player1 || !player2) {
      setErrmsg('We need two players to start the game!');
      return;
    }

    // set up a game
    setPlayerNames([player1, player2]);
    setCurPlayer(Math.round(Math.random()));
    // setPlayer1('');
    // setPlayer2('');

    // change state mode start -> inGame
    onSignin();
  }
  return (
    <div className="signin-container">
      <h1>Fruit Bowl</h1>
      <h2>Enter player names:</h2>
      <form onSubmit={handleSubmit} className="player-signin">
        <div className="row">
          <label htmlFor="player1">Player 1: </label>
          <input
            value={player1}
            onChange={e => {
              setPlayer1(e.target.value);
              setErrmsg('');
            }}
            type="text"
            id="player1"
          />
        </div>
        <div className="row">
          <label htmlFor="player2">Player 2: </label>
          <input
            value={player2}
            onChange={e => {
              setPlayer2(e.target.value);
              setErrmsg('');
            }}
            type="text"
            id="player2"
          />
        </div>
        <div className="row">
          <p>{errmsg}</p>
          <button className="btn">Start</button>
        </div>
      </form>
    </div>
  );
};
