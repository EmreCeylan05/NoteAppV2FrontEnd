import React from "react";
import { useApp } from "../../../context/appcontext";
import useStyles from '../stylesheet';
export default function BurgerButton() {
    const { theme, currentTheme, toggleMenu } = useApp();
    const classes = useStyles({ theme: currentTheme });
    const iconPath = theme === "dark" ? `${process.env.PUBLIC_URL}/assets/icons-dark` : `${process.env.PUBLIC_URL}/assets/icons-light`;
    return <button className={classes.button} onClick={toggleMenu}>
        <img
            src={`${iconPath}/burgerBar.png`}
            alt="Menu"
            style={{ verticalAlign: 'middle', width: '20px', height: '20px' }}
        ></img>
    </button>
}