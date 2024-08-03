import React from "react";
import { useApp } from "../../../context/appcontext";
import useStyles from './stylesheet';
export default function LogInButton({ onClick }) {
    const { currentTheme, translations } = useApp();
    const classes = useStyles({ theme: currentTheme });
    const text = translations.signIn;
    return <button className={classes.button} onClick={onClick}>
        <span className={classes.usertext}>{text}</span>
    </button>
}