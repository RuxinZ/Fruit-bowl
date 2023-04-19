import { generateRandomNumsInArr } from '../../shared/generateRandomNumsInArr';
export const SignIn = ({
  onSignin,
  setCurPlayer,
  setPlayerNames,
  setPlayer1,
  setPlayer2,
  setErrmsg,
  player1,
  player2,
  errmsg,
  setLevelOnecardsData,
  setLevelOnecards,
  setLevelTwocardsData,
  setLevelTwocards,
  setLevelThreecardsData,
  setLevelThreecards,
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    if (!player1 || !player2) {
      setErrmsg('We need two players to start the game!');
      return;
    }

    // set up a game
    setPlayerNames([player1, player2]);
    setCurPlayer(Math.round(Math.random()));
    const fetchL1Cards = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/cards/?Level=1',
          { mode: 'cors' },
        );
        const data = await response.json();
        setLevelOnecardsData(data);
        setLevelOnecards(generateRandomNumsInArr(40, 1, 40));
        return;
      } catch (err) {
        console.log(`Error fetching L1 cards: ${err}`);
      }
    };
    fetchL1Cards();

    const fetchL2Cards = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/cards/?Level=2',
          { mode: 'cors' },
        );
        const data = await response.json();
        setLevelOnecardsData(data);
        setLevelOnecards(generateRandomNumsInArr(30, 1, 30));
        return;
      } catch (err) {
        console.log(`Error fetching L2 cards: ${err}`);
      }
    };
    fetchL2Cards();

    const fetchL3Cards = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/cards/?Level=3',
          { mode: 'cors' },
        );
        const data = await response.json();
        setLevelOnecardsData(data);
        setLevelOnecards(generateRandomNumsInArr(20, 1, 20));
        return;
      } catch (err) {
        console.log(`Error fetching L3 cards: ${err}`);
      }
    };
    fetchL3Cards();

    // change state mode start -> inGame
    onSignin();
  }
  return (
    <div className="box-container">
      <h1>Fruit Bowl</h1>
      <h2>Enter player names:</h2>
      <form onSubmit={handleSubmit} className="player-signin">
        <div className="row">
          <label htmlFor="player1">Player 1: </label>
          <input
            value={player1}
            onChange={e => {
              setPlayer1(e.target.value);
              setErrmsg('');
            }}
            type="text"
            id="player1"
          />
        </div>
        <div className="row">
          <label htmlFor="player2">Player 2: </label>
          <input
            value={player2}
            onChange={e => {
              setPlayer2(e.target.value);
              setErrmsg('');
            }}
            type="text"
            id="player2"
          />
        </div>
        <div className="row">
          <p>{errmsg}</p>
          <button className="btn">Start</button>
        </div>
      </form>
    </div>
  );
};
