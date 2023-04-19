import './Board.css';
export const Board = () => {
  return (
    <div className="board">
      <div className="opponent-board">Opponent Board</div>
      <div className="menu-board">Menu</div>
      <div className="bowl-board">Bowl Board</div>
      <div className="card-board">Card Board</div>
      <div className="token-board">Token Board</div>
      <div className="player-board">Player Board</div>
      <div className="confirm-board">Confirm</div>
    </div>
  );
};
