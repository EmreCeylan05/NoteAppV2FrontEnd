import React from "react";
import { useApp } from "../../../context/appcontext";
import darkTheme from '../../../themes/variants/dark/index';
import lightTheme from '../../../themes/variants/light/index';
import useStyles from '../stylesheet';

export default function LockButton({ onclick, lock }) {
    const { theme } = useApp();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });
    const iconPath = theme === "dark" ? `${process.env.PUBLIC_URL}/assets/icons-dark` : `${process.env.PUBLIC_URL}/assets/icons-light`;
    const iconName = lock === "locked" ? "lock.png" : "unlock.png";
    return (
        <button className={classes.button} onClick={onclick}>
            <img
                alt="Lock"
                src={`${iconPath}/${iconName}`}
                style={{ verticalAlign: 'middle', width: '20px', height: '20px' }}
            />
        </button>
    );
}
