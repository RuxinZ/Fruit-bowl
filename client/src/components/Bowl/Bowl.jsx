import './Bowl.css';
export const Bowl = ({ bowlIndex, info }) => {
  return (
    <div className="card-container">
      <div className="points">3</div>
      <div>
        <div className={`${info.Green ? 'green' : 'hidden'}`}>
          <div>Green:</div>
          <div>{info.Green}</div>
        </div>
        <div className={`${info.White ? 'white' : 'hidden'}`}>
          <div>White:</div>
          <div>{info.White}</div>
        </div>
        <div className={`${info.Blue ? 'blue' : 'hidden'}`}>
          <div>Blue:</div>
          <div>{info.Blue}</div>
        </div>
        <div className={`${info.Black ? 'black' : 'hidden'}`}>
          <div>Black:</div>
          <div>{info.Black}</div>
        </div>
        <div className={`${info.Red ? 'red' : 'hidden'}`}>
          <div>Red:</div>
          <div>{info.Red}</div>
        </div>
      </div>
    </div>
  );
};
