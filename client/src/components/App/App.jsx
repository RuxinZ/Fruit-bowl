import React, { useState } from 'react';
import './App.css';
import { SignIn } from '../SignIn';
import { Transition } from '../InGame';

export const App = () => {
  const [mode, setMode] = useState('start');
  const [curPlayer, setCurPlayer] = useState(0);
  return (
    <>
      {mode === 'start' && (
        <SignIn
          onSignin={() => setMode('inGame')}
          setCurPlayer={setCurPlayer}
        />
      )}
      {mode === 'inGame' && <Transition curPlayer={curPlayer} />}
      {mode === 'gameOver' && <>Game Over </>}
    </>
  );
};
