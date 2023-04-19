import React, { useState } from 'react';
import './App.css';
import { SignIn } from '../SignIn';
import { Transition } from '../InGame';

export const App = () => {
  const [mode, setMode] = useState('start');
  const [confirmed, setConfirmed] = useState(false);
  const [curPlayer, setCurPlayer] = useState(0);
  const [playerNames, setPlayerNames] = useState([]);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [errmsg, setErrmsg] = useState('');
  return (
    <>
      {mode === 'start' && (
        <SignIn
          onSignin={() => setMode('inGame')}
          setCurPlayer={setCurPlayer}
          setPlayerNames={setPlayerNames}
          player1={player1}
          player2={player2}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setErrmsg={setErrmsg}
        />
      )}
      {mode === 'inGame' &&
        (!confirmed ? (
          <Transition
            curPlayer={curPlayer}
            setCurPlayer={setCurPlayer}
            playerNames={playerNames}
            setConfirmed={setConfirmed}
          />
        ) : (
          <>Start Game</>
        ))}

      {mode === 'gameOver' && <>Game Over </>}
    </>
  );
};
