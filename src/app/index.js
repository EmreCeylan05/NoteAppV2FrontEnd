import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import AppProvider, { useApp } from './context/appcontext.js';
import AuthProvider, { useAuth } from './context/authcontext.js';
import useStyles from './stylesheet.js';
import { Header, NavBar } from './components/index.js';
import Navigation from './navigation/index.js';
import constants from './constants/index.js';
const App = () => {
    const { currentTheme } = useApp();
    const classes = useStyles({ theme: currentTheme });
    const location = useLocation();
    const { setNotes, user } = useAuth();
    const owner = user !== null ? user.username : null;
    const server = constants.server;
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get(`${server}/notes`, {
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
    }, [location.pathname, setNotes, owner, server]);
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