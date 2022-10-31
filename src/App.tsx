
import { useCallback, useState } from 'react';
import './App.css';
import { Hand, Hands } from './components/Hand';
import { PlayerName } from './components/PlayerName';
import { Row } from './components/Row';

function App() {

  const [playerName, setPlayerName] = useState<string>('');

  const [_, setPlayerHand] = useState<Hands>();
  const setHand = useCallback(
    (hand: Hands) => setPlayerHand(hand)
  , []);

  return (
    <div className='app'>
      <div className='game'>
        <Row>
          <h1>Rock, Paper, Scissors</h1>
          <PlayerName setPlayerName={(name) => setPlayerName(name)} />
        </Row>
        <Row>
          <Hand key={Hands.Rock} hand={Hands.Rock} onClick={() => setHand(Hands.Rock)} />
          <Hand key={Hands.Paper} hand={Hands.Paper} onClick={() => setHand(Hands.Paper)} />
          <Hand key={Hands.Scissors} hand={Hands.Scissors} onClick={() => setHand(Hands.Scissors)} />
        </Row>
      </div>
    </div>
  );
}

export default App;
