import { createContext, useContext } from "react";
import { useState } from "react";
import darkTheme from '../themes/variants/dark/index.js';
import lightTheme from '../themes/variants/light/index.js';
const Context = createContext();
const Provider = ({ children }) => {

	const [theme, setTheme] = useState("light");
	const [language, setLanguage] = useState("tr");
	const [isMenuOpen, setIsMenuOpen] = useState("closed");
	const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

	const toggleTheme =()=>{
		setTheme(theme === "light" ? "dark" : "light");
	}
	const toggleLanguage =()=>{
		setLanguage(language === "tr" ? "en" : "tr");
	}
	const toggleMenu = () => {
        setIsMenuOpen(isMenuOpen === "closed" ? "open" : "closed");
    };

	const data = {
		language,
		toggleLanguage,
		theme,
		toggleTheme,
		isMenuOpen,
		toggleMenu,
		currentTheme,
	}

	return (
		<Context.Provider value={data} >
			{children}
		</Context.Provider>
	)
}
export const useApp = () => useContext(Context)
export default Provider;