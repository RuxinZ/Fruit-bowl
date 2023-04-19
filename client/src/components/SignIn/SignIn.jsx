import { generateRandomNumsInArr } from '../../shared/generateRandomNumsInArr';
export const SignIn = ({
  onSignin,
  setCurPlayer,
  setPlayer1,
  setPlayer2,
  setErrmsg,
  player1,
  player2,
  errmsg,
  setLevelOneArr,
  setLevelTwoArr,
  setLevelThreeArr,
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    if (!player1.name || !player2.name) {
      setErrmsg('We need two players to start the game!');
      return;
    }

    // set up a game
    setCurPlayer(Math.round(Math.random()));

    // const fetchCards = async () => {
    //   try {
    //     const response = await fetch(`http://localhost:3000/cards`, {
    //       mode: 'cors',
    //     });
    //     const data = await response.json();
    //     setCardsData(data);
    //   } catch (err) {
    //     console.log(`Error fetching L${level} cards: ${err}`);
    //   }
    // };
    // fetchCards();
    for (let i = 1; i < 4; i++) {
      switch (i) {
        case 1:
          setLevelOneArr(generateRandomNumsInArr(40, 1, 40));
        case 2:
          setLevelTwoArr(generateRandomNumsInArr(30, 1, 30));
        case 3:
          setLevelThreeArr(generateRandomNumsInArr(20, 1, 20));
      }
    }

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
            value={player1.name}
            onChange={e => {
              setPlayer1({ ...player1, name: e.target.value });
              setErrmsg('');
            }}
            type="text"
            id="player1"
          />
        </div>
        <div className="row">
          <label htmlFor="player2">Player 2: </label>
          <input
            value={player2.name}
            onChange={e => {
              setPlayer2({ ...player2, name: e.target.value });
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
