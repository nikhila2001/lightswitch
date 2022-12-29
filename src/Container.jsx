import React from 'react';
import Content from './context/Content';
import  { useDarkMode } from "./context/DarkModeContext";
import LightSwitch from "../src/context/LightSwitch.jsx";

function Container() {
    const { darkMode } = useDarkMode()
    return (
        <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
            <Content />
            <LightSwitch />
        </div>
    )
}
export default Container;