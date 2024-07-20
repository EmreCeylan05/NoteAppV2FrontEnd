// components/SwitchTheme/index.js
import React from "react";
import { useApp } from "../../../context/appcontext";
import darkTheme from '../../../themes/variants/dark/index';
import lightTheme from '../../../themes/variants/light/index';
import useStyles from '../stylesheet';

export default function SwitchTheme() {
	const { theme, setTheme } = useApp();
	const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
	const classes = useStyles({ theme: currentTheme });

	// Temaya göre ikonların yolu
	const iconPath = theme === 'dark' ? `${process.env.PUBLIC_URL}/assets/icons-dark` : `${process.env.PUBLIC_URL}/assets/icons-light`;

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<button className={classes.button} onClick={toggleTheme}>
			<img
				src={`${iconPath}/toggleTheme.png`}
				alt="Theme Icon"
				style={{verticalAlign: 'middle', width: '20px', height: '20px' }}
				className={classes.img}
			/>
		</button>
	);
}
