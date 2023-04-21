import './Board.css';
import { Bowl } from '../Bowl';
import { CardRow } from '../CardRow';
import { Token } from '../Token';
import { Confirm } from '../Confirm';
export const Board = ({
  bowlsArr,
  levelOneArr,
  levelTwoArr,
  levelThreeArr,
  setLevelOneArr,
  setLevelTwoArr,
  setLevelThreeArr,
  player1,
  player2,
  setPlayer1,
  setPlayer2,
  setConfirmed,
  curPlayer,
  setCurPlayer,
  currentCards1,
  currentCards2,
  currentCards3,
  setCurrentCards1,
  setCurrentCards2,
  setCurrentCards3,
  setMode,
  setCard1_1,
  setCard1_2,
  setCard1_3,
  setCard1_4,
  setCard2_1,
  setCard2_2,
  setCard2_3,
  setCard2_4,
  setCard3_1,
  setCard3_2,
  setCard3_3,
  setCard3_4,
}) => {
  const currentPlayer = curPlayer === 0 ? player1 : player2;
  const curOpponent = curPlayer === 1 ? player1 : player2;
  console.log('l1: ', currentCards1);
  console.log('l2: ', currentCards2);
  console.log('l3: ', currentCards3);
  // console.log(curPlayer);
  // console.log('currentPlayer :', currentPlayer);
  // console.log(curOpponent);
  // make bowl board
  const bowls = bowlsArr.map((obj, i) => (
    <Bowl key={i} bowlIndex={i} info={obj} />
  ));
  // make card board

  setCard1_1 = { setCard1_1 };
  setCard1_2 = { setCard1_2 };
  setCard1_3 = { setCard1_3 };
  setCard1_4 = { setCard1_4 };
  setCard2_1 = { setCard2_1 };
  setCard2_2 = { setCard2_2 };
  setCard2_3 = { setCard2_3 };
  setCard2_4 = { setCard2_4 };
  setCard3_1 = { setCard3_1 };
  setCard3_2 = { setCard3_2 };
  setCard3_3 = { setCard3_3 };
  setCard3_4 = { setCard3_4 };

  const cardRows = [];
  for (let i = 3; i > 0; i--) {
    let setCard1;
    let setCard2;
    let setCard3;
    let setCard4;
    switch (i) {
      case 3:
        setCard1 = setCard3_1;
        setCard2 = setCard3_2;
        setCard3 = setCard3_3;
        setCard4 = setCard3_4;
        break;
      case 2:
        setCard1 = setCard2_1;
        setCard2 = setCard2_2;
        setCard3 = setCard2_3;
        setCard4 = setCard2_4;
        break;
      case 1:
        setCard1 = setCard1_1;
        setCard2 = setCard1_2;
        setCard3 = setCard1_3;
        setCard4 = setCard1_4;
        break;
    }

    cardRows.push(
      <CardRow
        key={i}
        currentPlayer={currentPlayer}
        player1={player1}
        player2={player2}
        setPlayer1={setPlayer1}
        setPlayer2={setPlayer2}
        cardArr={
          i === 1 ? levelOneArr : i === 2 ? levelTwoArr : levelThreeArr
        }
        currentCards={
          i === 1 ? currentCards1 : i === 2 ? currentCards2 : currentCards3
        }
        level={i}
        setCards={
          i === 1
            ? setLevelOneArr
            : i === 2
            ? setLevelTwoArr
            : setLevelThreeArr
        }
        setCurrentCards={
          i === 1
            ? setCurrentCards1
            : i === 2
            ? setCurrentCards2
            : setCurrentCards3
        }
        setCard1={setCard1}
        setCard2={setCard2}
        setCard3={setCard3}
        setCard4={setCard4}
      />,
    );
  }

  // make token board
  const tokens = [];
  const obj = {
    0: 'Green',
    1: 'White',
    2: 'Blue',
    3: 'Black',
    4: 'Red',
    5: 'Gold',
  };
  for (let i = 0; i < 6; i++) {
    tokens.push(
      <Token
        key={i}
        color={obj[i]}
        currentPlayer
        player1={player1}
        player2={player2}
      />,
    );
  }

  // const handleMenuClick = () => {
  //   setMode('gameOver');
  // };
  return (
    <div className="board">
      <div
        className={
          'opponent-board ' + `${curOpponent.backgroundColorClassName}`
        }
      >
        <div className="player-name">{curOpponent.name}</div>
        <div className="player-points">
          <strong>Current Points: {curOpponent.points}</strong>
        </div>

        <div className="token-card-board">
          <div className="token-row">{tokens}</div>
          <div className="token-card">
            <div className="box b-green">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">{curOpponent.greenToken}</div>
              <div className="num">{curOpponent.greenCard}</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box b-white">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">{curOpponent.whiteToken}</div>
              <div className="num">{curOpponent.whiteCard}</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box b-blue">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">{curOpponent.blueToken}</div>
              <div className="num">{curOpponent.blueCard}</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box b-black">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">{curOpponent.blackToken}</div>
              <div className="num">{curOpponent.blackCard}</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box b-red">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">{curOpponent.redToken}</div>
              <div className="num">{curOpponent.redCard}</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box b-gold">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">{curOpponent.goldToken}</div>
              <div className="num">{curOpponent.goldCard}</div>
            </div>
          </div>
        </div>
        <div className="reserved-cards">Reserved Cards</div>
      </div>
      <div className="menu-board">
        <button
          onClick={() => setMode('gameOver')}
          className="btn menu-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fillRule="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
      <div
        className="bowl-board"
        p1score={player1.points}
        // p2score={player2.points}
      >
        {bowls}
      </div>
      <div className="card-board">{cardRows}</div>
      <div className="token-board">
        <div className="board-title">Tokens</div>
        {tokens}
      </div>
      <div
        className={
          'player-board ' + `${currentPlayer.backgroundColorClassName}`
        }
      >
        <div className="player-name">{currentPlayer.name}</div>
        <div className="player-points">
          <strong>Current Points: {currentPlayer.points}</strong>
        </div>
        <div className="token-card-board">
          <div className="token-row">{tokens}</div>
          <div className="token-card">
            <div className="box b-green">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">{currentPlayer.greenToken}</div>
              <div className="num">{currentPlayer.greenCard}</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box b-white">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">{currentPlayer.whiteToken}</div>
              <div className="num">{currentPlayer.whiteCard}</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box b-blue">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">{currentPlayer.blueToken}</div>
              <div className="num">{currentPlayer.blueCard}</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box b-black">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">{currentPlayer.blackToken}</div>
              <div className="num">{currentPlayer.blackCard}</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box b-red">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">{currentPlayer.redToken}</div>
              <div className="num">{currentPlayer.redCard}</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box b-gold">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">{currentPlayer.goldToken}</div>
              <div className="num">{currentPlayer.goldCard}</div>
            </div>
          </div>
        </div>
        <div className="reserved-cards">Reserved Cards</div>
      </div>
      <div className="confirm-board">
        {
          <Confirm
            curPlayer={curPlayer}
            setCurPlayer={setCurPlayer}
            setConfirmed={setConfirmed}
          />
        }
      </div>
    </div>
  );
};
