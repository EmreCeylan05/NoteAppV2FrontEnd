import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	root: {
		background: theme === 'light' ? '#fff' : '#333',
		color: theme === 'light' ? '#000' : '#fff',
		minHeight: '100vh',
		transition: 'background 0.3s, color 0.3s',
	},
}));

export default useStyles;