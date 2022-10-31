
import { useCallback, useState } from 'react';
import './App.css';
import { Hand, Hands, HandsNumeric } from './components/Hand';
import { PlayerName } from './components/PlayerName';
import { Row, Col } from './components/Layout';
import { FadeIn } from './components/FadeIn';
import { capitalize } from './util';

const WinningPairs = {
  [Hands.Scissors]: Hands.Paper,
  [Hands.Rock]: Hands.Scissors,
  [Hands.Paper]: Hands.Rock,
}

function App() {

  const [playerName, setPlayerName] = useState<string>('');
  const [winnerText, setWinnerText] = useState<string>('');

  const [_, setPlayerHand] = useState<Hands>();
  const setHand = useCallback(
    (hand: Hands) => {
      setWinnerText('');
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
      setWinnerText(`You win! ${capitalize(playerHand)} beats ${capitalize(computersHand)}.`);

    } else if (WinningPairs[computersHand] === playerHand) {
      setWinnerText(`Computer wins! ${capitalize(computersHand)} beats ${capitalize(playerHand)}.`);

    } else {
      setWinnerText(`It's a draw! ${capitalize(playerHand)} versus ${capitalize(computersHand)}.`);
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
              <>
                  <FadeIn>
                    <Row>
                      <Hand key={Hands.Rock} hand={Hands.Rock} onClick={() => setHand(Hands.Rock)} />
                      <Hand key={Hands.Paper} hand={Hands.Paper} onClick={() => setHand(Hands.Paper)} />
                      <Hand key={Hands.Scissors} hand={Hands.Scissors} onClick={() => setHand(Hands.Scissors)} />
                    </Row>
                  </FadeIn>
              </>
              {winnerText && (
                <FadeIn>
                  <Col>
                    <b>{winnerText}</b>
                    <p>Select a new hand to play again.</p>
                  </Col>
                </FadeIn>
              )}
            </>
        }
      </div>
    </div>
  );
}

export default App;
