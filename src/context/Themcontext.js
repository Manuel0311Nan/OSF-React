
import React, {createContext, useContext, useState} from 'react'

const themeStyles = {
    dark: {
        background: 'rgb(100, 8, 8)', 
        background2: 'rgb(0, 0, 0)',
        fontcolor1: 'rgb(256, 256, 256)'
    },
    light: {
        background: 'rgb(256, 256, 256)',
        background2: 'rgb(77, 77, 77)',
        fontcolor1: 'rgb(0, 0, 0)'
    }
}
const Themcontext = createContext();

function ThemeProvider(props) {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark');
    const value = {theme: themeStyles[theme], toggleTheme, themeName: theme}
    return <Themcontext.Provider value={value} {...props} />;
}

const useTheme = () => useContext(Themcontext)

export {ThemeProvider, useTheme}