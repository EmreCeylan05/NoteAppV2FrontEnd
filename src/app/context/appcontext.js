import {createContext, useContext} from "react";
import { useState } from "react";
const Context = createContext();
const Provider = ({children}) => {

    const [theme, setTheme] = useState("light");
	const [language, setLanguage] = useState("tr");
	const [isMenuOpen, setIsMenuOpen] = useState("closed");
	const data = {
		language,
		setLanguage,
		theme,
		setTheme,
		isMenuOpen,
		setIsMenuOpen,
	}

    return (
        <Context.Provider value={data} >
        {children}
        </Context.Provider>
    )
}
export const useApp = () => useContext(Context)
export default Provider;