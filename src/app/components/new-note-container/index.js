import React from "react";
import { useApp } from "../../context/appcontext";
import darkTheme from '../../themes/variants/dark/index';
import lightTheme from '../../themes/variants/light/index';
import useStyles from './stylesheet';
import { useState } from "react";
import SaveButton from "../buttons/SaveButton";
import CancelButton from "../buttons/CancelButton";
export default function NewNoteContainer({ onAddNote }) {

    const { theme, language } = useApp();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });
    const placeholderTitle = language === "en" ? "Title" : "Başlık";
    const placeholderContent = language === "en" ? "Note Content..." : "Not içeriği...";
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const lockStatus = "unlocked";
    const priority = 1;
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
        });
        setTitle('');
        setContent('');
    };
    return <div className={classes.container}>
        <input type="text" className={classes.input} placeholder={placeholderTitle} value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className={classes.textarea} placeholder={placeholderContent} value={content} onChange={(e) => setContent(e.target.value)} />
        <div className={classes.buttonContainer}> <CancelButton onclick={handleCancel} /> <SaveButton onclick={handleSubmit} /> </div>
    </div>
}