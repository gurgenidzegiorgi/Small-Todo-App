/* eslint-disable react/prop-types */
import styles from "./general.module.css";

import addBtnIcon from "../assets/add-icon.svg";

export default function InputDiv({
	handleAddNote,
	setNewNote,
	setError,
	setChecked,
	newNote,
	error,
}) {
	const handleInputChange = (e) => {
		setNewNote(e.target.value);
		setError(false);
	};
	return (
		<div className={styles.inputDiv}>
			<input
				className={styles.inputCheckbox}
				type="checkbox"
				onChange={(e) => setChecked(e.target.checked)}
			/>
			<input
				style={{
					border: error ? "0.5px solid #ff0000" : "none",
				}}
				type="text"
				value={newNote}
				placeholder={error ? "Please enter a note" : "Note"}
				onChange={(e) => {
					handleInputChange(e);
				}}
			/>
			<button
				style={{ backgroundColor: error ? "#ff0000" : "#20eeb0" }}
				className={styles.addBtn}
				onClick={handleAddNote}
			>
				<img src={addBtnIcon} alt="" />
			</button>
		</div>
	);
}
