import './Card.css';
export const Card = ({ info, currentPlayer, player1, player2 }) => {
  const classColor = 'card-' + `${info.Color}`;
  const handleClick = e => {
    console.log('e: ', e.target);
    console.log(currentPlayer);
    // const
  };

  return (
    <div className="card" onClick={e => handleClick(e)}>
      <div className="card-header">
        <div
          className={'points ' + `${info.Points ? '' : 'hidden-point'}`}
        >
          {info.Points}
        </div>
        <div className={classColor}></div>
      </div>

      <div className="card-main">
        <div className={`${info.Green ? 'green' : 'hidden'}`}>
          <div>Green:&nbsp;</div>
          <div>{info.Green}&nbsp;</div>
        </div>
        <div className={`${info.White ? 'white' : 'hidden'}`}>
          <div>White: &nbsp;</div>
          <div>{info.White}&nbsp;</div>
        </div>
        <div className={`${info.Blue ? 'blue' : 'hidden'}`}>
          <div>Blue: &nbsp;</div>
          <div>{info.Blue}&nbsp;</div>
        </div>
        <div className={`${info.Black ? 'black' : 'hidden'}`}>
          <div>Black: &nbsp; </div>
          <div>{info.Black}&nbsp;</div>
        </div>
        <div className={`${info.Red ? 'red' : 'hidden'}`}>
          <div>Red: &nbsp;</div>
          <div>{info.Red}&nbsp;</div>
        </div>
      </div>
    </div>
  );
};
