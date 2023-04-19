import React, { useState } from 'react';
import './App.css';
import { SignIn } from '../SignIn';
import { Transition } from '../InGame';
import { Board } from '../Board';

export const App = () => {
  const [mode, setMode] = useState('start');
  const [confirmed, setConfirmed] = useState(false);
  const [curPlayer, setCurPlayer] = useState(0);
  const [player1, setPlayer1] = useState({
    name: '',
    points: 0,
    cards: [],
    whiteToken: 0,
    whiteCard: 0,
    greenToken: 0,
    greenCard: 0,
    blueToken: 0,
    blueCard: 0,
    redToken: 0,
    redCard: 0,
    blackToken: 0,
    blackCard: 0,
    goldToken: 0,
    goldCard: 0,
  });
  const [player2, setPlayer2] = useState({
    name: '',
    points: 0,
    cards: [],
    whiteToken: 0,
    whiteCard: 0,
    greenToken: 0,
    greenCard: 0,
    blueToken: 0,
    blueCard: 0,
    redToken: 0,
    redCard: 0,
    blackToken: 0,
    blackCard: 0,
    goldToken: 0,
    goldCard: 0,
  });
  const [errmsg, setErrmsg] = useState('');
  // fetch the cards from db at the start game stage
  //
  const [levelOneArr, setLevelOneArr] = useState([]);
  const [levelTwoArr, setLevelTwoArr] = useState([]);
  const [levelThreeArr, setLevelThreeArr] = useState([]);
  const [bowls, setBowls] = useState([]);
  return (
    <>
      {mode === 'start' && (
        <SignIn
          onSignin={() => setMode('inGame')}
          setCurPlayer={setCurPlayer}
          player1={player1}
          player2={player2}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setErrmsg={setErrmsg}
          errmsg={errmsg}
          setLevelOneArr={setLevelOneArr}
          setLevelTwoArr={setLevelTwoArr}
          setLevelThreeArr={setLevelThreeArr}
        />
      )}
      {mode === 'inGame' &&
        (!confirmed ? (
          <Transition
            curPlayer={curPlayer}
            setCurPlayer={setCurPlayer}
            player1Name={player1.name}
            player2Name={player2.name}
            setConfirmed={setConfirmed}
          />
        ) : (
          <Board />
        ))}

      {mode === 'gameOver' && <>Game Over </>}
    </>
  );
};
