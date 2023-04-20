import './Card.css';
export const Card = ({
  info,
  currentPlayerName,
  player1,
  player2,
  setPlayer1,
  setPlayer2,
}) => {
  const classColor = 'card-' + `${info.Color}`;
  const handleClick = () => {
    // currentPlayerName == player1.name
    //   ? setPlayer1({
    //       ...player1,
    //       greenCard: player1.greenCard + info.Green,
    //       whiteCard: player1.whiteCard + info.White,
    //       blueCard: player1.blueCard + info.Blue,
    //       blackCard: player1.blackCard + info.Black,
    //       redCard: player1.redCard + info.Red,
    //     })
    //   : setPlayer2({
    //       ...player2,
    //       greenCard: player2.greenCard + info.Green,
    //       whiteCard: player2.whiteCard + info.White,
    //       blueCard: player2.blueCard + info.Blue,
    //       blackCard: player2.blackCard + info.Black,
    //       redCard: player2.redCard + info.Red,
    //     });
  };
  return (
    <div className="card" onClick={() => handleClick()}>
      <div className="card-header">
        <div
          className={'points ' + `${info.Points ? '' : 'hidden-point'}`}
        >
          {info.Points}
        </div>
        <div className={'score ' + classColor}></div>
      </div>

      <div className="card-main">
        <div
          className={`${
            info.Green !== 0 ? 'label-container' : 'label-hidden'
          }`}
        >
          <div className="card-label card-Green ">{info.Green}</div>
        </div>
        <div
          className={`${
            info.White !== 0 ? 'label-container' : 'label-hidden'
          }`}
        >
          <div className="card-label card-White ">{info.White}</div>
        </div>
        <div
          className={`${
            info.Blue !== 0 ? 'label-container' : 'label-hidden'
          }`}
        >
          <div className="card-label card-Blue ">{info.Blue}</div>
        </div>
        <div
          className={`${
            info.Black !== 0 ? 'label-container' : 'label-hidden'
          }`}
        >
          <div className="card-label card-Black ">{info.Black}</div>
        </div>
        <div
          className={`${
            info.Red !== 0 ? 'label-container' : 'label-hidden'
          }`}
        >
          <div className="card-label card-Red ">{info.Red}</div>
        </div>
      </div>
    </div>
  );
};
