/* eslint-disable react/prop-types */
import styles from "./general.module.css";

import removeBtn from "../assets/trash-can.svg";

export default function NoteList({ noteList, time, setNoteList }) {
	const handleCheckboxChange = (noteId) => {
		setNoteList((prevNoteList) => {
			return prevNoteList.map((note) => {
				if (note.id === noteId) {
					return { ...note, done: !note.done };
				}
				return note;
			});
		});
	};

	const handleRemoveNote = (noteId) => {
		setNoteList(
			noteList.filter((note) => {
				return note.id !== noteId;
			})
		);
	};
	return (
		<div className={styles.noteListDiv}>
			{noteList.map((note) => (
				<div className={styles.noteDiv} key={note.id}>
					<div className={styles.noteInfoDiv}>
						<li>{note.value}</li>
						<p className={styles.timeStamp}>
							Created at {time.format(note.timestamp)}
						</p>
					</div>
					<div className={styles.iconDiv}>
						<input
							className={styles.checkbox}
							type="checkbox"
							checked={note.done}
							onChange={() => handleCheckboxChange(note.id)}
						/>
						<img
							style={{ cursor: "pointer" }}
							src={removeBtn}
							onClick={() => handleRemoveNote(note.id)}
						/>
					</div>
				</div>
			))}
		</div>
	);
}
