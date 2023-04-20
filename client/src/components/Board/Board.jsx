import './Board.css';
import { Bowl } from '../Bowl';
import { CardRow } from '../CardRow/CardRow';
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
  for (let i = 0; i < 3; i++) {
    cardRows.push(
      <CardRow
        key={i}
        info={
          i === 0 ? levelOneArr : i === 1 ? levelTwoArr : levelThreeArr
        }
      />,
    );
  }

  return (
    <div className="board">
      <div className="opponent-board">Opponent Board</div>
      <div className="menu-board">Menu</div>
      <div
        className="bowl-board"
        p1score={player1.points}
        p2score={player2.points}
      >
        {bowls}
      </div>
      <div className="card-board">{cardRows}</div>
      <div className="token-board">Token Board</div>
      <div className="player-board">Player Board</div>
      <div className="confirm-board">Confirm</div>
    </div>
  );
};
