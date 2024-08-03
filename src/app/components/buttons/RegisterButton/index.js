import React from "react";
import { useApp } from "../../../context/appcontext";
import useStyles from './stylesheet';
export default function RegisterButton({ onClick }) {
    const { currentTheme, translations } = useApp();
    const classes = useStyles({ theme: currentTheme });
    const text = translations.createAccount;
    return <button className={classes.button}
        onClick={onClick}>
        <span className={classes.usertext}>{text}</span>
    </button>
}