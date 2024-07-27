import React from "react";
import { useApp } from "../../../context/appcontext";
import useStyles from './stylesheet';

export default function SearchButton({ onClick }) {
    const { theme, currentTheme } = useApp();
    const classes = useStyles({ theme: currentTheme });
    const iconPath = theme === "dark" ? `${process.env.PUBLIC_URL}/assets/icons-dark` : `${process.env.PUBLIC_URL}/assets/icons-light`;
    return (
        <button className={classes.button} onClick={onClick} >
            <img
                src={`${iconPath}/magnifier.png`}
                style={{ verticalAlign: 'middle', width: '20px', height: '20px' }}
                alt="Search"
            />
        </button>
    );
}
