import React from 'react';
import { useState } from 'react';

export const Transition = ({
  curPlayer,
  player1Name,
  player2Name,
  setConfirmed,
}) => {
  console.log('current Player: ', curPlayer);
  const curPlayerName = curPlayer === 0 ? player1Name : player2Name;
  return (
    <div className="box-container">
      <h1 className="row">Fruit Bowl</h1>
      <h2 className="row">Current Player: {curPlayerName}</h2>
      <div className="row">
        <button className="btn" onClick={() => setConfirmed(true)}>
          Confirm
        </button>
      </div>
    </div>
  );
};
