import React from "react";
import { useApp } from "../../../context/appcontext";
import darkTheme from '../../../themes/variants/dark/index';
import lightTheme from '../../../themes/variants/light/index';
import useStyles from './stylesheet';
export default function RegisterButton({ onclick }) {
    const { theme, language } = useApp();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });
    const text = language === "en" ? "Create Account" : "Hesap Oluştur";
    return <button className={classes.button}
        onClick={onclick}>
        <span className={classes.usertext}>{text}</span>
    </button>
}