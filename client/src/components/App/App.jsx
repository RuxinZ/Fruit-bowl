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
    greenToken: 1,
    greenCard: 2,
    whiteToken: 3,
    whiteCard: 4,
    blueToken: 5,
    blueCard: 6,
    blackToken: 7,
    blackCard: 8,
    redToken: 9,
    redCard: 10,
    goldToken: 11,
    goldCard: 12,
  });
  const [player2, setPlayer2] = useState({
    name: '',
    points: 0,
    cards: [],
    greenToken: 11,
    greenCard: 12,
    whiteToken: 13,
    whiteCard: 14,
    blueToken: 15,
    blueCard: 16,
    blackToken: 17,
    blackCard: 18,
    redToken: 19,
    redCard: 20,
    goldToken: 21,
    goldCard: 22,
  });
  const [errmsg, setErrmsg] = useState('');
  // fetch the cards from db at the start game stage

  const [levelOneArr, setLevelOneArr] = useState([]);
  const [levelTwoArr, setLevelTwoArr] = useState([]);
  const [levelThreeArr, setLevelThreeArr] = useState([]);
  const [currentCards1, setCurrentCards1] = useState([]);
  const [currentCards2, setCurrentCards2] = useState([]);
  const [currentCards3, setCurrentCards3] = useState([]);
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
          setCurrentCards1={setCurrentCards1}
          setCurrentCards2={setCurrentCards2}
          setCurrentCards3={setCurrentCards3}
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
            player2={player2}
            setLevelOneArr={setLevelOneArr}
            setLevelTwoArr={setLevelTwoArr}
            setLevelThreeArr={setLevelThreeArr}
            confirmed={confirmed}
            setConfirmed={setConfirmed}
            curPlayer={curPlayer}
            setCurPlayer={setCurPlayer}
            currentCards1={currentCards1}
            currentCards2={currentCards2}
            currentCards3={currentCards3}
            setCurrentCards1={setCurrentCards1}
            setCurrentCards2={setCurrentCards2}
            setCurrentCards3={setCurrentCards3}
          />
        ))}

      {mode === 'gameOver' && <>Game Over </>}
    </>
  );
};
