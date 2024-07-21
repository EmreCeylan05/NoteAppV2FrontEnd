import React from "react";
import { useApp } from "../../../context/appcontext";
import darkTheme from '../../../themes/variants/dark/index';
import lightTheme from '../../../themes/variants/light/index';
import useStyles from '../stylesheet';
import { useAuth } from "../../../context/authcontext";
import locales from '../../../locales/index';
export default function LogOutButton() {
    const { theme, language } = useApp();
    const translations = locales[language] || locales.en;
    const { setUser } = useAuth();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });
    const iconPath = `${process.env.PUBLIC_URL}/assets/icons`;
    const logout = () => {
        setUser(null);
    }
    const loggedinText = translations.logOut;

    return <button className={classes.button} onClick={logout}>
        <img
            src={`${iconPath}/logout.png`}
            style={{ verticalAlign: 'middle', width: '20px', height: '20px' }}
            alt={"exit"}
        />
        <span className={classes.usertext}>{loggedinText}</span>
    </button>
}