/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import styles from "./general.module.css";

import flowersImg from "../assets/flowers.png";

export default function DateAndTime({ time }) {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date());
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const date = new Intl.DateTimeFormat("en-US", {
		weekday: "short",
		day: "numeric",
	}).format(currentTime);

	return (
		<div className={styles.imgDiv}>
			<img src={flowersImg} alt="" />
			<div className={styles.dateDiv}>
				<p className={styles.date}>{date}</p>
				<p className={styles.time}>{time.format(currentTime)}</p>
			</div>
		</div>
	);
}
