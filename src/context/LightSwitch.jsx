import React, {useContext} from 'react';
import DarkModeContext from './DarkModeContext';

function LightSwitch() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <div className="Lightswitch">
            <img src={darkMode ? 
            `src/images/lightswitch-off.png` : `src/images/lightswitch-on.png`} alt="Lightswitch on" onClick={handleClick}/>          
        </div>
    )
}

// Light Switch design by Jeremy Loyd, US - Public Domain
export default LightSwitch
