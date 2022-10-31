
import { useState } from 'react';
import './PlayerName.css';
import { FadeIn } from './FadeIn';

type PlayerNameProps = {
    setPlayerName: (name: string) => void;
}
export const PlayerName: React.FC<PlayerNameProps> = ({
    setPlayerName
}) => {
    const [name, setName] = useState<string>('');
    const [shouldDisplay, setShouldDisplay] = useState<boolean>(false);

    function setNameHandler(name: string) {
        setPlayerName(name);
        setShouldDisplay(true);
    }

    return (
        <div className='name'>
            <input type='text' placeholder='set your player name' value={name} onFocus={() => setShouldDisplay(false)} onChange={(e) => setName(e.target.value)} />
            <button disabled={!name} onClick={() => setNameHandler(name)}>set name</button>
            {
                shouldDisplay
                && <FadeIn>You're playing as {name}. Let's play!</FadeIn>
            }
        </div>
    )
}
