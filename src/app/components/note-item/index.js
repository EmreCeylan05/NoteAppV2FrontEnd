import React, { useState } from "react";
import { useApp } from "../../context/appcontext";
import darkTheme from '../../themes/variants/dark/index';
import lightTheme from '../../themes/variants/light/index';
import useStyles from './stylesheet';
import EditButton from "../buttons/EditButton/index.js";
import DeleteButton from "../buttons/DeleteButton/index.js";
import ExpandButton from "../buttons/ExpandButton/index.js";
import LockButton from "../buttons/LockButton/index.js";
import SaveButton from "../buttons/SaveButton/index.js";
import CancelButton from "../buttons/CancelButton/index.js";
import PriorityButton from "../buttons/PriorityButton/index.js";

export default function NoteItem({ note, onDelete, onEdit }) {
    const [content, setContent] = useState(note.content);
    const [priority, setPriority] = useState(note.priority);
    const { theme, language } = useApp();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const passwordText = language === 'en' ? "Password" : "Şifre";
    const [isEditing, setIsEditing] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [lockStatus, setLockStatus] = useState(note.lockStatus);
    const [password, setPassword] = useState(note.password);
    const [tempPassword, setTempPassword] = useState('');
    const owner = note.owner;

    const classes = useStyles({ theme: currentTheme, isExpanded });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(note.id, { id: note.id, title, content, priority, lockStatus, owner, password });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setTitle(note.title);
        setContent(note.content);
    };

    const handleLock = () => {
        if (!password && lockStatus === "unlocked") {
            setLockStatus("create-password");
        } else if (lockStatus === "create-password") {
            if (tempPassword) {
                setPassword(tempPassword);
                setLockStatus("locked");
                onEdit(note.id, { id: note.id, title, content, priority, lockStatus: "locked", owner, password: tempPassword });
                setTempPassword('');
            } else {
                alert("Please enter a password.");
            }
        } else if (lockStatus === "locked") {
            if (tempPassword === password) {
                setLockStatus("unlocked");
                onEdit(note.id, { id: note.id, title, content, priority, lockStatus: "unlocked", owner, password });
                setTempPassword('');
            } else {
                alert("Incorrect password.");
            }
        } else {
            const newLockStatus = lockStatus === "locked" ? "unlocked" : "locked";
            setLockStatus(newLockStatus);
            onEdit(note.id, { id: note.id, title, content, priority, lockStatus: newLockStatus, owner, password });
        }
    };

    const handlePriority = () => {
        const newPriority = priority >= 3 ? 1 : priority + 1;
        setPriority(newPriority);
        onEdit(note.id, { id: note.id, title, content, priority: newPriority, lockStatus, owner, password });
    };

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        isEditing ? (
            <div className={classes.noteFrame}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.input}
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className={classes.textarea}
                />
                <div className={classes.buttonContainer}>
                    <SaveButton onClick={handleSave} />
                    <CancelButton onClick={handleCancel} />
                </div>
            </div>
        ) : (
            lockStatus === "locked" ? (
                <div className={classes.noteFrame}>
                    <span className={classes.title}>???</span>
                    <span className={classes.content}>?????????</span>
                    <input
                        type="password"
                        className={classes.input}
                        placeholder={passwordText}
                        value={tempPassword}
                        onChange={(e) => setTempPassword(e.target.value)}
                    />
                    <div className={classes.buttonContainer}>
                        <LockButton onClick={handleLock} lock={lockStatus} />
                    </div>
                </div>
            ) : lockStatus === "create-password" ? (
                <div className={classes.noteFrame}>
                    <span className={classes.title}>{title}</span>
                    <span className={classes.content}>{content}</span>
                    <input
                        type="password"
                        className={classes.input}
                        placeholder="Create Password"
                        value={tempPassword}
                        onChange={(e) => setTempPassword(e.target.value)}
                    />
                    <div className={classes.buttonContainer}>
                        <LockButton onClick={handleLock} lock={lockStatus} />
                    </div>
                </div>
            ) : (
                <div className={classes.noteFrame}>
                    <span className={classes.title}>{note.title}</span>
                    <span className={classes.content}>{note.content}</span>
                    <div className={classes.buttonContainer}>
                        <EditButton onClick={handleEdit} />
                        <DeleteButton onClick={() => onDelete(note.id)} />
                        <ExpandButton onClick={handleExpand} />
                        <LockButton onClick={handleLock} lock={lockStatus} />
                        <PriorityButton onClick={handlePriority} priorityState={priority} />
                    </div>
                </div>
            )
        )
    );
}
