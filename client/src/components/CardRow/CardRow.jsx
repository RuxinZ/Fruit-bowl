import './CardRow.css';
import { Card } from '../Card/Card';
export const CardRow = ({ info }) => {
  // console.log('info: ', info);
  const cards = [];
  for (let i = 0; i < 4; i++) {
    cards.push(<Card key={i} />);
  }
  return (
    <div className="row-container">
      <div className="facedown card"></div>
      {cards}
    </div>
  );
};
