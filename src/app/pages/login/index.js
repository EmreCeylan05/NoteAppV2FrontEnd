import {LoginContainer} from '../../components/index';
import React from "react";
import useStyles from './stylesheet';

export default function Login() {
    const classes = useStyles();

    return (
        <div className={classes.SignPage}>
            <LoginContainer />
        </div>
    );
}
