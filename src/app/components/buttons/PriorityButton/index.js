import React from "react";
import { useApp } from "../../../context/appcontext";
import darkTheme from '../../../themes/variants/dark/index';
import lightTheme from '../../../themes/variants/light/index';
import useStyles from '../stylesheet';
export default function PriorityButton({onclick, priorityState , setPriorityState}) {
    const { theme } = useApp();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });
    const iconPath = theme === "dark" ? `${process.env.PUBLIC_URL}/assets/icons-dark` : `${process.env.PUBLIC_URL}/assets/icons-light`;
    const HandleClick = ()=>{
        onclick();
        setPriorityState(priorityState === 3 ? 1 : priorityState+1 );
    }
    return <button className={classes.button} onClick={HandleClick}>
        {priorityState}
    </button>
}