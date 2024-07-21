import LoginContainer from '../../components/login-container';
import React from "react";
import { useApp } from "../../context/appcontext";
import darkTheme from '../../themes/variants/dark/index';
import lightTheme from '../../themes/variants/light/index';
import useStyles from './stylesheet';

export default function Login() {
    const { theme } = useApp();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });

    return (
        <div className={classes.SignPage}>
            <LoginContainer />
        </div>
    );
}
