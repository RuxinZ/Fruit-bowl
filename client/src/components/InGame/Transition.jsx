import React from 'react';
import { useState } from 'react';

export const Transition = ({ curPlayer, playerNames, setConfirmed }) => {
  console.log('current Player: ', curPlayer);
  console.log('playerNames: ', playerNames);
  return (
    <>
      <h1>Fruit Bowl</h1>
      <h2>Current Player: {playerNames[curPlayer]}</h2>
      <button className="btn" onClick={() => setConfirmed(true)}>
        Confirm
      </button>
    </>
  );
};
