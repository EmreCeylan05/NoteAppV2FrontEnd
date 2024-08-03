import React from 'react';
import useStyles from './stylesheet';
import { useApp } from '../../context/appcontext';
import { useAuth } from '../../context/authcontext';
import { Buttons } from '../index';
export default function NavBar() {
    const { BurgerButton, SwitchTheme, SwitchLanguage, PageToggle, LogOutButton } = Buttons;
    const { theme, currentTheme, isMenuOpen, language, translations } = useApp();
    const { user } = useAuth();
    const classes = useStyles({ theme: currentTheme });
    return (
        <div className={`${classes.menu} ${isMenuOpen === "open" ? 'open' : 'closed'}`}>
            <div className={classes.burger}><BurgerButton /></div>
            <hr className={classes.hr}></hr>
            <div className={classes.buttonContainer}>
                <span className={classes.text}>{translations.menu}</span>
                <div className={classes.buttonLine}>
                    <SwitchTheme />
                    <span>{theme === "dark" ? translations.lightTheme : translations.darkTheme}</span>
                </div>
                <div className={classes.buttonLine}>
                    <SwitchLanguage />
                    <span>{language === "en" ? translations.toTurkish : translations.toEnglish}</span>
                </div>
                {user && <>
                    <div className={classes.buttonLine}>
                        <PageToggle />
                        <span>{translations.togglePage}</span>
                    </div>
                    <div className={classes.buttonLine}>
                        <LogOutButton />
                    </div></>}
            </div>
        </div>
    );
}
