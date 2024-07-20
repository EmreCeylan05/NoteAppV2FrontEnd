import React from "react";
import { useApp } from "../../context/appcontext";
import darkTheme from '../../themes/variants/dark/index';
import lightTheme from '../../themes/variants/light/index';
import { useState } from "react";
import SearchButton from "../buttons/SearchButton";
import axios from "axios";
import { useAuth } from "../../context/authcontext";
import useStyles from "./stylesheet";
export default function SearchBar() {
    const {setNotes} =useAuth();
    const [query, setQuery] = useState('');
    const { theme, language} = useApp();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });
	const placeholder = language === "en" ? "Search for notes..." : "Arama yapın...";
	const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/search?query=${query}`);
            setNotes(response.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };
	return (
		<div className={classes.searchBar}>
			<input type="text" className={classes.input} placeholder={placeholder} value={query} onChange={(e) => setQuery(e.target.value)}/>
			<SearchButton onclick={handleSearch}/>
		</div>
	);
}