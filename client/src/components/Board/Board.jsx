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
  player1,
  setPlayer1,
  player2,
  setPlayer2,
}) => {
  // make bowl board
  const bowls = bowlsArr.map((obj, i) => (
    <Bowl key={i} bowlIndex={i} info={obj} />
  ));
  // console.log('l1cards: ', levelOneArr);
  // make card board
  const cardRows = [];
  for (let i = 3; i > 0; i--) {
    cardRows.push(
      <CardRow
        key={i}
        info={
          i === 1 ? levelOneArr : i === 2 ? levelTwoArr : levelThreeArr
        }
        level={i}
      />,
    );
  }

  // make token board
  const tokens = [];
  for (let i = 0; i < 6; i++) {
    tokens.push(<Token key={i} />);
  }

  return (
    <div className="board">
      <div className="opponent-board">
        <div className="player-name">Opponent Name</div>
        <div className="player-points">Current Points</div>
        <div className="token-card-board">
          <div className="token-card">
            <div className="box">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">0</div>
              <div className="num">0</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">0</div>
              <div className="num">0</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">0</div>
              <div className="num">0</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">0</div>
              <div className="num">0</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">0</div>
              <div className="num">0</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">0</div>
              <div className="num">0</div>
            </div>
          </div>
        </div>
        <div className="reserved-cards">Reserved Cards</div>
      </div>
      <div className="menu-board">Menu</div>
      <div
        className="bowl-board"
        p1score={player1.points}
        p2score={player2.points}
      >
        {bowls}
      </div>
      <div className="card-board">{cardRows}</div>
      <div className="token-board">
        <div></div>
        {tokens}
      </div>
      <div className="player-board">
        <div className="player-name">Player Name</div>
        <div className="player-points">Current Points</div>
        <div className="token-card-board">
          <div className="token-card">
            <div className="box">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">0</div>
              <div className="num">0</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">0</div>
              <div className="num">0</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">0</div>
              <div className="num">0</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">0</div>
              <div className="num">0</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">0</div>
              <div className="num">0</div>
            </div>
          </div>
          <div className="token-card">
            <div className="box">
              <div className="token-icon">Tokens</div>
              <div className="cards-icon">Cards</div>
              <div className="num">0</div>
              <div className="num">0</div>
            </div>
          </div>
        </div>
        <div className="reserved-cards">Reserved Cards</div>
      </div>
      <div className="confirm-board">{<Confirm />}</div>
    </div>
  );
};
