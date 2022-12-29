import React, { createContext, useState, useContext } from "react";


function DarkModeProvider(props) {
    console.log(props, "props")
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    console.log("dark mode is rendering")
    // const light = {
    //     DarkModeContext, DarkModeProvider
    // }

    const contextValue = {
        darkMode,
        toggleDarkMode
    }

    return (
        <div>
            <DarkModeContext.Provider value={contextValue}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
}

const initialContext = {
    darkMode: true,
    toggleDarkMode: () => {
        throw new Error('You forgot to wrap your component in <DarkModeProvider>.');
    }
}
/**
 * The Basic Auth Context
 */
export const DarkModeContext = createContext(initialContext);

export const useDarkMode = () => useContext(DarkModeContext);

export default DarkModeProvider;