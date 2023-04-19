import React from 'react';
import { useState } from 'react';

export const Transition = ({ curPlayer, playerNames, setConfirmed }) => {
  console.log('current Player: ', curPlayer);
  console.log('playerNames: ', playerNames);
  return (
    <div className="box-container">
      <h1 className="row">Fruit Bowl</h1>
      <h2 className="row">Current Player: {playerNames[curPlayer]}</h2>
      <div className="row">
        <button className="btn" onClick={() => setConfirmed(true)}>
          Confirm
        </button>
      </div>
    </div>
  );
};
