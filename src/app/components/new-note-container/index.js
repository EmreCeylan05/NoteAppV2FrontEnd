import React, { useState } from "react";
import { useApp } from "../../context/appcontext";
import { useAuth } from "../../context/authcontext";
import { Buttons } from "../index.js";
import useStyles from './stylesheet';
import locales from '../../locales/index.js';
const { CancelButton, SaveButton } = Buttons;
export default function NewNoteContainer({ onAddNote }) {
    const { currentTheme, language } = useApp();
    const classes = useStyles({ theme: currentTheme });
    const translations = locales[language] || locales.en;
    const placeholderTitle = translations.titlePlaceholder;
    const placeholderContent = translations.contentPlaceholder;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const lockStatus = "unlocked";
    const priority = 1;
    const { user } = useAuth();
    const owner = user.username;
    const password = null;

    const handleCancel = () => {
        setTitle('');
        setContent('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            return;
        }
        onAddNote({
            id: Date.now().toString(),
            title,
            content,
            priority,
            lockStatus,
            owner,
            password
        });
        setTitle('');
        setContent('');
    };

    return (
        <div className={classes.container}>
            <input
                type="text"
                className={classes.input}
                placeholder={placeholderTitle}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className={classes.textarea}
                placeholder={placeholderContent}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <div className={classes.buttonContainer}>
                <CancelButton onClick={handleCancel}>{translations.cancel}</CancelButton>
                <SaveButton onClick={handleSubmit}>{translations.save}</SaveButton>
            </div>
        </div>
    );
}