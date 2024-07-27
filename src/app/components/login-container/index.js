import React, { useState } from "react";
import { useApp } from "../../context/appcontext";
import { useAuth } from "../../context/authcontext";
import { Buttons } from '../index';
import { useNavigate } from 'react-router-dom';
import useStyles from './stylesheet';
import axios from 'axios';
import locales from '../../locales';
import constants from "../../constants";
export default function LoginContainer() {
    const { LogInButton, RegisterButton } = Buttons;
    const { currentTheme, language } = useApp();
    const { setUser, user, setNotes } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles({ theme: currentTheme });
    const translations = locales[language] || locales.en;
    const middleText = translations.or;
    const navigate = useNavigate();
    const server = constants.server;
    const fetchNotes = async () => {
        try {
            const response = await axios.get(`${server}/notes?query=${user?.username}`);
            setNotes(response.data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${server}/login`, {
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
            const response = await axios.post(`${server}/register`, {
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
