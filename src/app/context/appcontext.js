import { createContext, useContext, useState } from "react";
import themes from '../themes';
import locales from "../locales";
const Context = createContext();
const Provider = ({ children }) => {

	const [theme, setTheme] = useState("light");
	const [language, setLanguage] = useState("tr");
	const [isMenuOpen, setIsMenuOpen] = useState("closed");
	const currentTheme = themes[theme];
	const translations = locales[language] || locales.en;
	const toggleTheme = () => {	
		setTheme(theme === "light" ? "dark" : "light");
	}
	const toggleLanguage = () => {
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
		translations,
	}

	return (
		<Context.Provider value={data} >
			{children}
		</Context.Provider>
	)
}
export const useApp = () => useContext(Context)
export default Provider;