import './GameEnd.css';

export const GameEnd = ({
  player1name,
  player2name,
  player1score,
  player2score,
  setMode,
  setPlayer1,
  setPlayer2,
  setConfirmed,
  setCurPlayer,
}) => {
  const handleSubmit = () => {
    setConfirmed(false);
    setPlayer1({
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
      backgroundColorClassName: 'player1background',
    });
    setPlayer2({
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
      backgroundColorClassName: 'player1background',
    });
    setCurPlayer(0);
    setMode('start');
  };
  return (
    <>
      <div className="gamend-box-container">
        <h2>Game Over</h2>
        <h1 style={{ fontSize: '4rem' }}>
          {player1score > player2score
            ? `Congratulations, ${player1name}!`
            : player1score < player2score
            ? `Congratulations, ${player2name}!`
            : 'It was a tie! '}
        </h1>
        <div>
          <button onClick={handleSubmit} className="start-btn">
            New Game
          </button>
        </div>
      </div>
    </>
  );
};
