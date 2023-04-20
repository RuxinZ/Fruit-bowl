// import { generateRandomNumsInArr } from '../../shared/generateRandomNumsInArr';
import './SignIn.css';
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
  setBowlsArr,
  l1Ind,
  l2Ind,
  l3Ind,
  bowlInd,
  setCurrentCards1,
  setCurrentCards2,
  setCurrentCards3,
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    // console.log('clicked!');
    if (!player1.name || !player2.name) {
      setErrmsg('We need two players to start the game!');
      return;
    } else if (player1.name === player2.name) {
      setErrmsg('You are not playing against yourself. Go grab a friend!');
      return;
    }

    // set up a game
    setCurPlayer(Math.round(Math.random()));

    const fetchCards = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cards`, {
          mode: 'cors',
        });
        const data = await response.json();

        const arr1 = [];
        const cur1 = [];
        for (let i = 0; i < l1Ind.length; i++) {
          if (i < 4)
            cur1.push(data.find(obj => obj.ID === l1Ind[i].toString()));
          else {
            arr1.push(data.find(obj => obj.ID === l1Ind[i].toString()));
          }
        }
        setLevelOneArr(arr1);
        setCurrentCards1(cur1);

        const arr2 = [];
        const cur2 = [];
        for (let i = 0; i < l2Ind.length; i++) {
          if (i < 4)
            cur2.push(data.find(obj => obj.ID === l2Ind[i].toString()));
          else {
            arr2.push(data.find(obj => obj.ID === l2Ind[i].toString()));
          }
        }
        setLevelTwoArr(arr2);
        setCurrentCards2(cur2);

        const arr3 = [];
        const cur3 = [];
        for (let i = 0; i < l3Ind.length; i++) {
          if (i < 4)
            cur3.push(data.find(obj => obj.ID === l3Ind[i].toString()));
          else {
            arr3.push(data.find(obj => obj.ID === l3Ind[i].toString()));
          }
        }
        setLevelThreeArr(arr3);
        setCurrentCards3(cur3);
      } catch (err) {
        console.log(`Error fetching cards: ${err}`);
      }
    };
    fetchCards();

    const fetchBowls = async () => {
      try {
        const response = await fetch(`http://localhost:3000/bowls`, {
          mode: 'cors',
        });
        const data = await response.json();
        // console.log(data);
        const arr = [];
        for (let i = 0; i < bowlInd.length; i++) {
          arr.push(data.find(obj => obj.ID === bowlInd[i].toString()));
        }
        setBowlsArr(arr);
      } catch (err) {
        console.log(`Error fetching bowl cards: ${err}`);
      }
    };
    fetchBowls();

    // change state mode start -> inGame
    onSignin();
  }
  return (
    <div className="box-container">
      <h1 style={{ fontSize: '4rem' }}>Fruit Bowl</h1>
      <h2>Enter player names:</h2>
      <form onSubmit={handleSubmit} className="player-signin">
        <div className="row">
          <label className="label" htmlFor="player1">
            Player 1:
          </label>
          <input
            className="input"
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
          <label className="label" htmlFor="player2">
            Player 2:
          </label>
          <input
            className="input"
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
          <p className="error-msg">{errmsg}</p>
          <button className="start-btn">START</button>
        </div>
      </form>
    </div>
  );
};
