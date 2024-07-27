import React, { useState } from "react";
import { useApp } from "../../context/appcontext";
import SearchButton from "../buttons/SearchButton";
import axios from "axios";
import { useAuth } from "../../context/authcontext";
import useStyles from "./stylesheet";
import locales from "../../locales";

export default function SearchBar() {
    const { setNotes, user } = useAuth();
    const [query, setQuery] = useState('');
    const [showFixedInput, setShowFixedInput] = useState(false);
    const { currentTheme, language } = useApp();
    const translations = locales[language] || locales.en;
    const classes = useStyles({ theme: currentTheme });
    const placeholder = translations.searchPlaceHolder;
    const owner = user.username;

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/search`, {
                params: {
                    query: query,
                    owner: owner
                }
            });
            setNotes(response.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    const handleButtonClick = () => {
        setShowFixedInput(!showFixedInput);
        handleSearch();
    };

    return (
        <>
            <div className={classes.searchBar}>
                <input
                    type="text"
                    className={classes.input}
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <SearchButton onClick={handleButtonClick} />
            </div>
            {showFixedInput && (
                <div className={classes.fixedInputContainer}>
                    <input
                        type="text"
                        className={classes.fixedInput}
                        placeholder={placeholder}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            )}
        </>
    );
}