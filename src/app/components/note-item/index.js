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
    const { theme } = useApp();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [lockStatus, setLockStatus] = useState(note.lockStatus);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(note.id, { id: note.id, title, content, priority, lockStatus });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setTitle(note.title);
        setContent(note.content);
    };

    const handleLock = () => {
        const newLockStatus = lockStatus === "locked" ? "unlocked" : "locked";
        setLockStatus(newLockStatus);
        onEdit(note.id, { id: note.id, title, content, priority, lockStatus :newLockStatus });
    };

    const handlePriority = () => {
        const newPriority = priority >= 3 ? 1 : priority + 1;
        setPriority(newPriority);
        onEdit(note.id, { id: note.id, title, content, priority: newPriority, lockStatus });
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
                    <SaveButton onclick={handleSave} />
                    <CancelButton onclick={handleCancel} />
                </div>
            </div>
        ) :
            (
                lockStatus === "locked" ? (
                    <div className={classes.noteFrame}>
                        <span className={classes.title}>???</span>
                        <span className={classes.content}>?????????</span>
                        <div className={classes.buttonContainer}>
                            <LockButton onclick={handleLock} lock={lockStatus} />
                        </div>
                    </div>
                ) :
                    (
                        <div className={classes.noteFrame}>
                            <span className={classes.title}>{note.title}</span>
                            <span className={classes.content}>{note.content}</span>
                            <div className={classes.buttonContainer}>
                                <EditButton onclick={handleEdit} />
                                <DeleteButton onclick={() => onDelete(note.id)} />
                                <ExpandButton />
                                <LockButton onclick={handleLock} lock={lockStatus} />
                                <PriorityButton onclick={handlePriority} priorityState={priority} />
                            </div>
                        </div>
                    )
            )
    );
}
