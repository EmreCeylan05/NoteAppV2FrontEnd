import React from "react";
import { useApp } from "../../../context/appcontext";
import darkTheme from '../../../themes/variants/dark/index';
import lightTheme from '../../../themes/variants/light/index';
import useStyles from '../stylesheet';
export default function PriorityButton({ onclick, priorityState }) {
    const { theme } = useApp();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });

    const handleClick=()=>{
        onclick();
    }
    return <button className={classes.button} onClick={handleClick}>
        {priorityState}
    </button>
}