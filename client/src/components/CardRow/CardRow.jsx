import './CardRow.css';
import { Card } from '../Card/Card';
export const CardRow = ({
  cardArr,
  currentCards,
  setCards,
  setCurrentCards,
  level,
  currentPlayer,
  setPlayer1,
  setPlayer2,
  player1,
  player2,
}) => {
  // console.log('info: ', info);
  const cards = [];
  for (let i = 0; i < 4; i++) {
    cards.push(
      <Card
        key={i}
        info={currentCards[i]}
        currentPlayerName={currentPlayer.name}
        setPlayer1={setPlayer1}
        setPlayer2={setPlayer2}
        player1={player1}
        player2={player2}
      />,
    );
  }
  const levelLetter = level === 1 ? 'I' : level === 2 ? 'II' : 'III';
  return (
    <div className="row-container">
      <div
        className={
          'facedown card ' +
          `${level === 1 ? 'L1' : level === 2 ? 'L2' : 'L3'}`
        }
      >
        {levelLetter}
      </div>
      {cards}
    </div>
  );
};
