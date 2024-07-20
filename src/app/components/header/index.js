import SwitchLanguage from "../buttons/SwitchLanguage/index.js";
import SwitchTheme from "../buttons/SwitchTheme/index.js"
import { useAuth } from "../../context/authcontext.js";
import { useApp } from "../../context/appcontext.js";
import React from "react"
import useStyles from "./stylesheet.js";
import darkTheme from '../../themes/variants/dark/index.js';
import lightTheme from '../../themes/variants/light/index';
import LogOutButton from "../buttons/LogOutButton/index.js";
import SearchBar from "../searchbar/index.js";
import BurgerButton from "../buttons/BurgerButton/index.js";
import PageToggle from "../buttons/PageToggle/index.js";
export default function Header() {
    const { user } = useAuth();
    const { theme, language } = useApp();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });
    const iconPath = `${process.env.PUBLIC_URL}/assets/icons`;
    const loggedinText = language === "en" ? "Welcome: " +(user ?  user.username : "null")  : "Hoşgeldiniz: " + (user ?  user.username : "null");
    const loggedoutText = language === "en" ? "Sign in" : "Giriş Yapınız";
    const text = user === null ? loggedoutText : loggedinText;
    return (
        <div className={classes.headerContainer}>
            <div className={classes.userContainer}>
                <img className={classes.userPhoto} src={`${iconPath}/User.png`} alt="UserPhoto" />
                <span className={classes.userText}>
                    {text}
                    {user !== null ? <LogOutButton /> : ''}
                </span>
            </div>
            {user && <SearchBar />}
            <div className={classes.buttonContainer}>
                <SwitchTheme />
                <SwitchLanguage />
                {user && <PageToggle />}
            </div>
            <div className={classes.burger}>
                <BurgerButton />
            </div>
        </div>
    );
}