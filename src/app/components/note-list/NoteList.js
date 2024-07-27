import React from 'react';
import NoteItem from '../note-item/index';
import { useApp } from '../../context/appcontext';
import useStyles from './stylesheet';
import axios from 'axios';
import { useAuth } from '../../context/authcontext';
import constants from '../../constants';
const NoteList = () => {
	const { notes, setNotes } = useAuth();
	const server = constants.server;
	const deleteNote = async (id) => {
		try {
			await axios.delete(`${server}/notes/${id}`);
			setNotes(notes.filter((note) => note.id !== id));
		} catch (error) {
			console.error('Silme hata:', error);
		}
	};

	const editNote = async (id, updatedNote) => {
		try {
			await axios.put(`${server}/notes/${id}`, updatedNote);
			const updatedNotes = notes.map((note) =>
				note.id === id ? updatedNote : note
			);
			setNotes(updatedNotes);
		} catch (error) {
			console.error('Düzenleme hata:', error);
		}
	};

	const { currentTheme } = useApp();
	const classes = useStyles({ theme: currentTheme });
	return (
		<div className={classes.NoteList}>
			{notes.map(note => (
				<NoteItem
					key={note.id}
					note={note}
					onDelete={deleteNote}
					onEdit={editNote}
				/>
			))}
		</div>
	);
};

export default NoteList;
