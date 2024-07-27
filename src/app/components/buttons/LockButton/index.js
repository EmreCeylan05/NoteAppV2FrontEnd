import React from "react";
import { useApp } from "../../../context/appcontext";
import useStyles from '../stylesheet';

export default function LockButton({ onClick, lock }) {
    const { theme, currentTheme } = useApp();
    const classes = useStyles({ theme: currentTheme });
    const iconPath = theme === "dark" ? `${process.env.PUBLIC_URL}/assets/icons-dark` : `${process.env.PUBLIC_URL}/assets/icons-light`;
    const iconName = lock === "locked" ? "lock.png" : "unlock.png";
    return (
        <button className={classes.button} onClick={onClick}>
            <img
                alt="Lock"
                src={`${iconPath}/${iconName}`}
                style={{ verticalAlign: 'middle', width: '20px', height: '20px' }}
            />
        </button>
    );
}
