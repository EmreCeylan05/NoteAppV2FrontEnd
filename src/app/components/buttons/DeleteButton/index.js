import React from "react";
import { useApp } from "../../../context/appcontext";
import darkTheme from '../../../themes/variants/dark/index';
import lightTheme from '../../../themes/variants/light/index';
import useStyles from '../stylesheet'; 

export default function DeleteButton({ onClick }) {
    const { theme } = useApp();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });
    const iconPath = theme === "dark" ? `${process.env.PUBLIC_URL}/assets/icons-dark` : `${process.env.PUBLIC_URL}/assets/icons-light`;
    return (
        <button className={classes.button} onClick={onClick} >
            <img
                src={`${iconPath}/bin.png`}
                style={{ verticalAlign: 'middle', width: '20px', height: '20px' }}
                alt="Delete"
            />
        </button>
    );
}
