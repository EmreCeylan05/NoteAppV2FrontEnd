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
export default function LoginContainer() {
    const { theme, language } = useApp();
    const { setUser ,user ,setNotes } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });
    const placeholderUser = language === "en" ? "User Name" : "Kullanıcı adı";
    const owner = user !== null ? user.username : null;
    const middleText = language === "en" ? "Or" : "Veya";
    const placeholderPassword = language === "en" ? "Password" : "Şifre";
    const navigate = useNavigate();
    const fetchNotes = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/notes?query=${owner}`);
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
            /* buraya fetch */
        } catch (error) {
            console.error("Giriş hatası:", error);
            alert("Giriş Hatasi", error);
        }
    };

    const handleRegister = async () => {
        console.log("Kayit");
        try {
            const response = await axios.post('http://localhost:5000/register', {
                username,
                password
            });
            setUser(response.data.user);
        } catch (error) {
            console.error('Kayıt hatası:', error);
        }
    };

    return (
        <div className={classes.container}>
            <input
                type="text"
                className={classes.input}
                placeholder={placeholderUser}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                className={classes.input}
                placeholder={placeholderPassword}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <LogInButton onclick={handleLogin} />
            <span>{middleText}</span>
            <RegisterButton onclick={handleRegister} />
        </div>
    );
}
