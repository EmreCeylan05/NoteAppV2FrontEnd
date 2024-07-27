import React from 'react';
import AppProvider from './context/appcontext.js';
import AuthProvider, { useAuth } from './context/authcontext.js';
import useStyles from './stylesheet.js';
import Header from './components/header/index.js';
import { useApp } from './context/appcontext.js';
import Navigation from './navigation/index.js';
import NavBar from './components/navbar/index.js';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
const App = () => {
    const { currentTheme } = useApp();
    const classes = useStyles({ theme: currentTheme });
    const location = useLocation();
    const { setNotes, user } = useAuth();
    const owner = user !== null ? user.username : null;

    useEffect(() => {
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
        if (location.pathname === '/') {
            fetchNotes();
        }
    }, [location.pathname, setNotes, owner]);
    return (
        <div className={classes.container}>
            <Header />
            <NavBar />
            <Navigation />
        </div>
    );
};

const ContextApi = () => {
    return (
        <AppProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </AppProvider>
    );
};

export default ContextApi;