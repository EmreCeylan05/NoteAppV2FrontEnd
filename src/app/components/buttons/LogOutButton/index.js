import React from "react";
import { useApp } from "../../../context/appcontext";
import { useAuth } from "../../../context/authcontext";
import useStyles from '../stylesheet';
import locales from '../../../locales/index';
export default function LogOutButton() {
    const { currentTheme, language } = useApp();
    const translations = locales[language] || locales.en;
    const { setUser } = useAuth();
    const classes = useStyles({ theme: currentTheme });
    const iconPath = `${process.env.PUBLIC_URL}/assets/icons`;
    const logout = () => {
        setUser(null);
    }
    const loggedinText = translations.logOut;

    return <button className={classes.button} onClick={logout}>
        <img
            style={{ verticalAlign: 'middle', width: '20px', height: '20px' }}
            src={`${iconPath}/logout.png`}
            alt={"exit"}
        />
        <span className={classes.usertext}>{loggedinText}</span>
    </button>
}