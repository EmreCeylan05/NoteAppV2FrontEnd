import React, { useState } from "react";
import { useApp } from "../../context/appcontext";
import { useAuth } from "../../context/authcontext";
import darkTheme from '../../themes/variants/dark/index';
import lightTheme from '../../themes/variants/light/index';
import useStyles from './stylesheet';
import LogInButton from "../buttons/LogInButton/";
import RegisterButton from "../buttons/RegisterButton";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import locales from '../../locales';

export default function LoginContainer() {
    const { theme, language } = useApp();
    const { setUser, user, setNotes } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });
    const translations = locales[language] || locales.en;

    const placeholderUser = translations.usernamePlaceholder;
    const placeholderPassword = translations.passwordPlaceholder;
    const middleText = translations.or;
    const navigate = useNavigate();

    const fetchNotes = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/notes?query=${user?.username}`);
            setNotes(response.data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password
            });
            setUser(response.data.user);
            fetchNotes();
            navigate('/');
            alert(translations.loginSuccess);
        } catch (error) {
            console.error("Giriş hatası:", error);
            alert(translations.loginError);
        }
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/register', {
                username,
                password
            });
            setUser(response.data.user);
            alert(translations.registerSuccess);
        } catch (error) {
            console.error('Kayıt hatası:', error);
        }
    };

    return (
        <div className={classes.container}>
            <input
                type="text"
                className={classes.input}
                placeholder={translations.usernamePlaceholder}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                className={classes.input}
                placeholder={translations.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <LogInButton onClick={handleLogin} />
            <span>{middleText}</span>
            <RegisterButton onClick={handleRegister} />
        </div>
    );
}
