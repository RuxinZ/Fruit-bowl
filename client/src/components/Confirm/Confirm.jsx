import './Confirm.css';
export const Confirm = ({ curPlayer, setCurPlayer, setConfirmed }) => {
  return (
    <>
      <button
        onClick={() => {
          setConfirmed(false);
          setCurPlayer(1 - curPlayer);
        }}
        className="btn"
      >
        Confirm
      </button>
    </>
  );
};
