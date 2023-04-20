import './Bowl.css';
export const Bowl = ({ bowlIndex, info }) => {
  return (
    <div className="card-container">
      <div className="points">3</div>
      <div>
        <div className={`${info.Green ? 'green' : 'hidden'}`}>
          <div>Green:&nbsp;</div>
          <div>{info.Green}&nbsp;</div>
          <img src="http://localhost:3000/card-icon" alt="card" />
        </div>
        <div className={`${info.White ? 'white' : 'hidden'}`}>
          <div>White: &nbsp;</div>
          <div>{info.White}&nbsp;</div>
          <img src="http://localhost:3000/card-icon" alt="card" />
        </div>
        <div className={`${info.Blue ? 'blue' : 'hidden'}`}>
          <div>Blue: &nbsp;</div>
          <div>{info.Blue}&nbsp;</div>
          <img src="http://localhost:3000/card-icon" alt="card" />
        </div>
        <div className={`${info.Black ? 'black' : 'hidden'}`}>
          <div>Black: &nbsp; </div>
          <div>{info.Black}&nbsp;</div>
          <img src="http://localhost:3000/card-icon" alt="card" />
        </div>
        <div className={`${info.Red ? 'red' : 'hidden'}`}>
          <div>Red: &nbsp;</div>
          <div>{info.Red}&nbsp;</div>
          <img src="http://localhost:3000/card-icon" alt="card" />
        </div>
      </div>
    </div>
  );
};
