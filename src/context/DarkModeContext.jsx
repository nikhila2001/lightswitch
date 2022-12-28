import React, { createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
    console.log(props, "props")
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    console.log("dark mode is rendering")

    return (
        <div>
            <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
}
const light = {
    DarkModeContext, DarkModeProvider
}
export default light;