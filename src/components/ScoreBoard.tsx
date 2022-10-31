
import { Col, Row } from './Layout';
import './ScoreBoard.css';

type ScoreBoardProps = {
    playerName: string,
    playerScore: number,
    computerScore: number
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({
    playerName,
    playerScore,
    computerScore
}) => {
    return (
        <div className='scoreboard'>
            {
                playerName && (
                <>
                    <h1>Scores</h1>
                    <Row>
                        <Col>
                            <b>{`${playerName}`}</b>
                            <span>{`${playerScore}`}</span>
                        </Col>
                        <Col>
                            <b>Computer</b>
                            <span>{`${computerScore}`}</span>
                        </Col>
                    </Row>
                </>
                )
            }
        </div>
    )
}
