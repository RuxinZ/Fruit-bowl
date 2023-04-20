import React, { useState } from 'react';
import './App.css';
import { SignIn } from '../SignIn';
import { Transition } from '../InGame';
import { Board } from '../Board';
import {
  l1Ind,
  l2Ind,
  l3Ind,
  bowlInd,
} from '../../shared/randomiedIndices';

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

  const [levelOneArr, setLevelOneArr] = useState([]);
  const [levelTwoArr, setLevelTwoArr] = useState([]);
  const [levelThreeArr, setLevelThreeArr] = useState([]);
  const [bowlsArr, setBowlsArr] = useState([]);
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
          setBowlsArr={setBowlsArr}
          l1Ind={l1Ind}
          l2Ind={l2Ind}
          l3Ind={l3Ind}
          bowlInd={bowlInd}
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
          <Board
            bowlsArr={bowlsArr}
            levelOneArr={levelOneArr}
            levelTwoArr={levelTwoArr}
            levelThreeArr={levelThreeArr}
            player1={player1}
            setPlayer1={setPlayer1}
            player2={player2}
            setPlayer2={setPlayer2}
            setLevelOneArr={setLevelOneArr}
            setLevelTwoArr={setLevelTwoArr}
            setLevelThreeArr={setLevelThreeArr}
            confirmed={confirmed}
            setConfirmed={setConfirmed}
            curPlayer={curPlayer}
            setCurPlayer={setCurPlayer}
          />
        ))}

      {mode === 'gameOver' && <>Game Over </>}
    </>
  );
};
