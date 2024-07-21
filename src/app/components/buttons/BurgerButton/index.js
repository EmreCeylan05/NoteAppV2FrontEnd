import React from "react";
import { useApp } from "../../../context/appcontext";
import darkTheme from '../../../themes/variants/dark/index';
import lightTheme from '../../../themes/variants/light/index';
import useStyles from '../stylesheet';
export default function BurgerButton() {
    const { theme, isMenuOpen, setIsMenuOpen } = useApp();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });
    const iconPath = theme === "dark" ? `${process.env.PUBLIC_URL}/assets/icons-dark` : `${process.env.PUBLIC_URL}/assets/icons-light`;
    const toggleMenu = () => {
        setIsMenuOpen(isMenuOpen === "closed" ? "open" : "closed");
    };
    return <button className={classes.button} onClick={toggleMenu}>
        <img
            src={`${iconPath}/burgerBar.png`}
            alt="Menu"
            style={{ verticalAlign: 'middle', width: '20px', height: '20px' }}
        ></img>
    </button>
}