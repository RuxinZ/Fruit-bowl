import './Board.css';
import { Bowl } from '../Bowl';
export const Board = ({
  bowlsArr,
  levelOneArr,
  levelTwoArr,
  levelThreeArr,
}) => {
  // make bowls
  const bowls = bowlsArr.map((obj, i) => {
    <Bowl key={i} info={obj} />;
  });
  console.log('l1cards: ', levelOneArr);
  console.log('bowls: ', bowlsArr);
  return (
    <div className="board">
      <div className="opponent-board">Opponent Board</div>
      <div className="menu-board">Menu</div>
      <div className="bowl-board">{bowls}</div>
      <div className="card-board">Card Board</div>
      <div className="token-board">Token Board</div>
      <div className="player-board">Player Board</div>
      <div className="confirm-board">Confirm</div>
    </div>
  );
};
