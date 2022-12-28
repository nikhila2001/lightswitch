import React, { useContext } from 'react';
import Content from './context/Content';
import DarkModeContext from "./context/DarkModeContext";
import LightSwitch from "../src/context/LightSwitch.jsx";

function Container() {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
            <Content />
            <LightSwitch />
        </div>
    )
}
export default Container;