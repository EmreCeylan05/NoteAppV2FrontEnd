import React from "react";
import useStyles from './stylesheet';
import NewNoteContainer from '../../components/new-note-container';
import axios from "axios";
import { useAuth } from "../../context/authcontext";

export default function Create() {
    const { notes, setNotes } = useAuth();
    const addNote = async (newNote) => {
        try {
            const response = await axios.post('http://localhost:5000/notes', newNote);
            setNotes([...notes, response.data]);
        } catch (error) {
            console.error('ekleme hatasi:', error);
        }
    };
    const classes = useStyles();

    return <div className={classes.create}>
        <NewNoteContainer onAddNote={addNote} />
    </div>;
}