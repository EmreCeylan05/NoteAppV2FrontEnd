import React from "react";
import { useApp } from "../../../context/appcontext";
import useStyles from '../stylesheet';
export default function ExpandButton({ onClick, isExpanded }) {
    const { theme, currentTheme } = useApp();
    const classes = useStyles({ theme: currentTheme });
    const iconPath = theme === "dark" ? `${process.env.PUBLIC_URL}/assets/icons-dark` : `${process.env.PUBLIC_URL}/assets/icons-light`;
    const iconName = isExpanded === false ? "downArrow.png" : "upArrow.png";
    return <button className={classes.button} onClick={onClick}>
        <img
            alt="Expand"
            src={`${iconPath}/${iconName}`}
            style={{ verticalAlign: 'middle', width: '20px', height: '20px' }}
        ></img>
    </button>
}   