import React from 'react';
import useStyles from './stylesheet';
import { useApp } from '../../context/appcontext';
import BurgerButton from '../buttons/BurgerButton';
import SwitchTheme from '../buttons/SwitchTheme';
import SwitchLanguage from '../buttons/SwitchLanguage';
import PageToggle from '../buttons/PageToggle';
import LogoutButton from '../buttons/LogOutButton';
import locales from '../../locales/index';
import { useAuth } from '../../context/authcontext';

export default function NavBar() {
    const { theme, currentTheme, isMenuOpen, language } = useApp();
    const { user } = useAuth();
    const classes = useStyles({ theme: currentTheme });
    const translations = locales[language] || locales.en;
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
                        <LogoutButton />
                    </div></>}
            </div>
        </div>
    );
}
