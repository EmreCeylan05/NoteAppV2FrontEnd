import React from "react";
import useStyles from "./stylesheet.js";
import { useApp } from "../../context/appcontext.js";
import { useAuth } from "../../context/authcontext.js";
import { Buttons, SearchBar } from '../index.js';
export default function Header() {
    const { SwitchLanguage, SwitchTheme, LogOutButton, BurgerButton, PageToggle } = Buttons;
    const { user } = useAuth();
    const { currentTheme, translations } = useApp();
    const classes = useStyles({ theme: currentTheme });
    const iconPath = `${process.env.PUBLIC_URL}/assets/icons`;
    const loggedinText = `${translations.welcomeUser}${user ? user.username : "null"}`;
    const loggedoutText = translations.signIn;
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
