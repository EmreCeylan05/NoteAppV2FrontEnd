import React from "react";
import { useApp } from "../../../context/appcontext";
import useStyles from '../stylesheet';
export default function PriorityButton({ onClick, priorityState }) {
    const { currentTheme } = useApp();
    const classes = useStyles({ theme: currentTheme });
    const handleClick = () => {
        onClick();
    }
    return <button className={classes.button} onClick={handleClick}>
        {priorityState}
    </button>
}