import React from 'react';
import { useState } from 'react';

export const Transition = ({ curPlayer }) => {
  return (
    <>
      <h1>Fruit Bowl</h1>
      <h2>Current Player: Player {curPlayer + 1}</h2>
      <button className="btn">Confirm</button>
    </>
  );
};
