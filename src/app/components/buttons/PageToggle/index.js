import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useApp } from "../../../context/appcontext";
import darkTheme from '../../../themes/variants/dark/index';
import lightTheme from '../../../themes/variants/light/index';
import useStyles from '../stylesheet';
const PageToggle = () => {
    const { theme } = useApp();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });

    const iconPath = theme === "dark" ? `${process.env.PUBLIC_URL}/assets/icons-dark` : `${process.env.PUBLIC_URL}/assets/icons-light`;
    const navigate = useNavigate();
    const [page, setPage] = useState("home");

    const togglePage = () => {
        setPage(page === "home" ? "create" : "home");
    };
    const iconname = page === "home" ? "add.png" : "house.png";
    const buttonText = page === "home" ? "Create" : "Home";

    const onClickEvent = () => {
        togglePage();
        if (page === "home") {
            navigate('/create');
        } else {
            navigate('/');

        }
    };

    return (
        <button className={classes.button} onClick={onClickEvent}>
            <img
                src={`${iconPath}/${iconname}`}
                style={{ verticalAlign: 'middle', width: '20px', height: '20px' }}
                alt={buttonText}
            />
        </button>
    );
};

export default PageToggle;
