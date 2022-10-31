
import { useCallback, useState } from 'react';
import './App.css';
import { Hand, Hands, HandsNumeric } from './components/Hand';
import { PlayerName } from './components/PlayerName';
import { Row } from './components/Row';
import { FadeIn } from './components/FadeIn';

const WinningPairs = {
  [Hands.Scissors]: Hands.Paper,
  [Hands.Rock]: Hands.Scissors,
  [Hands.Paper]: Hands.Rock,
}

function App() {

  const [playerName, setPlayerName] = useState<string>('');

  const [_, setPlayerHand] = useState<Hands>();
  const setHand = useCallback(
    (hand: Hands) => {
      setPlayerHand(hand);
      calculateWinner(hand);
      saveScores();
    }
  , []);

  function calculateWinner(playerHand: Hands) {
    const NUM_OUTCOMES = 3;
    const computer = Math.floor(Math.random() * NUM_OUTCOMES);
    const computersHand = HandsNumeric[computer] as Hands;

    if (WinningPairs[playerHand] === computersHand) {
      alert('Player wins!');

    } else if (WinningPairs[computersHand] === playerHand) {
      alert('Computer wins!');

    } else {
      // Draw  
      alert('It\'s a draw!');
    }

  }

  function saveScores() {

  }

  return (
    <div className='app'>
      <div className='game'>
        <Row>
          <h1>Rock, Paper, Scissors</h1>
          <PlayerName setPlayerName={(name) => setPlayerName(name)} />
        </Row>
        {
          playerName &&
            <>
              <FadeIn>Select a hand:</FadeIn>
              <FadeIn>
                <Row>
                  <Hand key={Hands.Rock} hand={Hands.Rock} onClick={() => setHand(Hands.Rock)} />
                  <Hand key={Hands.Paper} hand={Hands.Paper} onClick={() => setHand(Hands.Paper)} />
                  <Hand key={Hands.Scissors} hand={Hands.Scissors} onClick={() => setHand(Hands.Scissors)} />
                </Row>
              </FadeIn>
            </>
        }
      </div>
    </div>
  );
}

export default App;
