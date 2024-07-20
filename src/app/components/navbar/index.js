import React from 'react';
import useStyles from './stylesheet';
import darkTheme from '../../themes/variants/dark';
import lightTheme from '../../themes/variants/light';
import { useApp } from '../../context/appcontext';
import BurgerButton from '../buttons/BurgerButton';
import SwitchTheme from '../buttons/SwitchTheme';
import SwitchLanguage from '../buttons/SwitchLanguage';
import PageToggle from '../buttons/PageToggle';
import LogoutButton from '../buttons/LogOutButton';
export default function NavBar() {
    const { theme, isMenuOpen, language } = useApp();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });

    const lightText = language === "en" ? "Dark Theme" : "Koyu Tema";
    const darkText = language === "en" ? "Light Theme" : "Açık Tema";
    const text = theme === "dark" ? darkText : lightText;

    const translateText = language === "en" ? "Türkçe" : "English";
    const pageToggleText = language === "en" ? "Toggle Page" : "Sayfa Değiştir";


    return (
        <div className={`${classes.menu} ${isMenuOpen === "open" ? 'open' : 'closed'}`}>
            <div className={classes.burger}><BurgerButton /></div>
            <hr className={classes.hr}></hr>
            <div className={classes.buttonContainer}>
                <span className={classes.text}>MENU</span>
                <div className={classes.buttonLine}>
                    <SwitchTheme />
                    <span>{text}</span>
                </div>
                <div className={classes.buttonLine}>
                    <SwitchLanguage />
                    <span>{translateText}</span>
                </div>
                <div className={classes.buttonLine}>
                    <PageToggle />
                    <span>{pageToggleText}</span>
                </div>
                <div className={classes.buttonLine}>
                    <LogoutButton />
                </div>
            </div>
        </div>
    );
}
