import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useApp } from "../../../context/appcontext";
import useStyles from '../stylesheet';
import { useAuth } from "../../../context/authcontext";
import axios from "axios";
const PageToggle = () => {
    const { theme, currentTheme } = useApp();
    const { user, setNotes } = useAuth();
    const classes = useStyles({ theme: currentTheme });
    const owner = user !== null ? user.username : null;
    const fetchNotes = async () => {
        try {
            const response = await axios.get('http://localhost:5000/notes', {
                params: {
                    owner: owner
                }
            });
            setNotes(response.data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };
    const iconPath = theme === "dark" ? `${process.env.PUBLIC_URL}/assets/icons-dark` : `${process.env.PUBLIC_URL}/assets/icons-light`;
    const navigate = useNavigate();
    const [page, setPage] = useState("home");
    const togglePage = () => {
        setPage(page === "home" ? "create" : "home");
        fetchNotes();
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
