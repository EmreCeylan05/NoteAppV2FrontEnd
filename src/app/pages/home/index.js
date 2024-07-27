import React from "react";
import { NoteList } from "../../components/index";
import { useAuth } from "../../context/authcontext";
export default function Home() {
	const { note } = useAuth();
	return <NoteList notes={note} />
}