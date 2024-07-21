import React from "react";
import { useApp } from "../../../context/appcontext";
import darkTheme from '../../../themes/variants/dark/index';
import lightTheme from '../../../themes/variants/light/index';
import useStyles from './stylesheet';
import locales from '../../../locales/index';
export default function LogInButton({ onClick }) {
    const { theme, language } = useApp();
    const translations = locales[language] || locales.en;
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });
    const text = translations.signIn;
    return <button className={classes.button} onClick={onClick}>
        <span className={classes.usertext}>{text}</span>
    </button>
}