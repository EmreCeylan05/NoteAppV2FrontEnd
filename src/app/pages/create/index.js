import React from "react";
import useStyles from './stylesheet';
import NewNoteContainer from '../../components/new-note-container';
import axios from "axios";
import { useAuth } from "../../context/authcontext";
import constants from "../../constants";

export default function Create() {
    const { notes, setNotes } = useAuth();
    const server = constants.server;
    const addNote = async (newNote) => {
        try {
            const response = await axios.post(`${server}/notes`, newNote);
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