import React from "react";
import { useApp } from "../../../context/appcontext";
import useStyles from './stylesheet';
import locales from '../../../locales/index';
export default function RegisterButton({ onClick }) {
    const { currentTheme, language } = useApp();
    const translations = locales[language] || locales.en;
    const classes = useStyles({ theme: currentTheme });
    const text = translations.createAccount;
    return <button className={classes.button}
        onClick={onClick}>
        <span className={classes.usertext}>{text}</span>
    </button>
}