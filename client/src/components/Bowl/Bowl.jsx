import './Bowl.css';
export const Bowl = ({ bowlIndex, info }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="points">3</div>
      </div>

      <div className="bowl-card-main">
        <div
          className={`${
            info.Green !== 0 ? 'bowl-label-container' : 'label-hidden'
          }`}
        >
          <div className="bowl-label card-Green ">{info.Green}</div>
          <div className="icon-containter">
            <img src="http://localhost:3000/card-icon" alt="card" />
          </div>
        </div>
        <div
          className={`${
            info.White !== 0 ? 'bowl-label-container' : 'label-hidden'
          }`}
        >
          <div className="bowl-label card-White ">{info.White}</div>
          <div className="icon-containter">
            <img src="http://localhost:3000/card-icon" alt="card" />
          </div>
        </div>
        <div
          className={`${
            info.Blue !== 0 ? 'bowl-label-container' : 'label-hidden'
          }`}
        >
          <div className="bowl-label card-Blue ">{info.Blue}</div>
          <div className="icon-containter">
            <img src="http://localhost:3000/card-icon" alt="card" />
          </div>
        </div>
        <div
          className={`${
            info.Black !== 0 ? 'bowl-label-container' : 'label-hidden'
          }`}
        >
          <div className="bowl-label card-Black ">{info.Black}</div>
          <div className="icon-containter">
            <img src="http://localhost:3000/card-icon" alt="card" />
          </div>
        </div>
        <div
          className={`${
            info.Red !== 0 ? 'bowl-label-container' : 'label-hidden'
          }`}
        >
          <div className="bowl-label card-Red ">{info.Red}</div>
          <div className="icon-containter">
            <img src="http://localhost:3000/card-icon" alt="card" />
          </div>
        </div>
      </div>
    </div>
  );
};
