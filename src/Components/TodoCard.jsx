/* eslint-disable no-unused-vars */
import { useState } from "react";

import styles from "./general.module.css";

import DateAndTime from "./DateAndTimeDiv";
import InputDiv from "./InputDiv";

import NoteList from "./NoteList";

let intialList = [
	{ id: 0, value: "Item0", done: false, timestamp: new Date() },
	{ id: 1, value: "Item1", done: true, timestamp: new Date() },
	{ id: 2, value: "Item2", done: false, timestamp: new Date() },
];

let nextId = 3;

export default function TodoCard() {
	const [noteList, setNoteList] = useState(intialList);
	const [newNote, setNewNote] = useState("");
	const [checked, setChecked] = useState(false);
	const [error, setError] = useState(false);

	const time = new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});

	const handleAddNote = () => {
		setNoteList((prevNote) => {
			if (!newNote) {
				setError(true);
				return [...prevNote];
			} else {
				return [...prevNote, { id: nextId++, value: newNote, done: checked }];
			}
		});
		setNewNote("");
	};

	return (
		<div style={{ backgroundColor: "#fff", borderRadius: "1rem" }}>
			<DateAndTime time={time} />

			<div className={styles.contentDiv}>
				<InputDiv
					handleAddNote={handleAddNote}
					error={error}
					setChecked={setChecked}
					setError={setError}
					newNote={newNote}
					setNewNote={setNewNote}
				/>
				<NoteList noteList={noteList} setNoteList={setNoteList} time={time} />
			</div>
		</div>
	);
}
