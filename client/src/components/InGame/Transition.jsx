import React from 'react';
import '../InGame/Transition.css';
export const Transition = ({
  curPlayer,
  player1,
  player2,
  setConfirmed,
}) => {
  // console.log('current Player: ', curPlayer);
  const currentPlayer = curPlayer === 0 ? player1 : player2;
  return (
    <div
      className={
        'box-container ' + `${currentPlayer.backgroundColorClassName}`
      }
    >
      <h1 className="row">Fruit Bowl</h1>
      <h2 className="row" style={{ fontSize: '4rem' }}>
        Current Player: {currentPlayer.name}
      </h2>
      <div className="row">
        <button className="start-btn" onClick={() => setConfirmed(true)}>
          Confirm
        </button>
      </div>
    </div>
  );
};
