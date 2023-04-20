import './Token.css';
export const Token = ({ color }) => {
  return (
    <div className="token-container">
      <div className={'token ' + `${color}`}></div>
      <div className="value">5</div>
    </div>
  );
};
