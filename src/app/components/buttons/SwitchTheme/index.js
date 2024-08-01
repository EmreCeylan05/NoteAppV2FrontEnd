import React from "react";
import { useApp } from "../../../context/appcontext";
import useStyles from '../stylesheet';

export default function SwitchTheme() {
	const { theme, currentTheme, toggleTheme } = useApp();
	const classes = useStyles({ theme: currentTheme });
	const iconPath = theme === 'dark' ? `${process.env.PUBLIC_URL}/assets/icons-dark` : `${process.env.PUBLIC_URL}/assets/icons-light`;
	return (
		<button className={classes.button} onClick={toggleTheme}>
			<img
				style={{ verticalAlign: 'middle', width: '20px', height: '20px' }}
				src={`${iconPath}/toggleTheme.png`}
				className={classes.img}
				alt="Theme Icon"
			/>
		</button>
	);
}