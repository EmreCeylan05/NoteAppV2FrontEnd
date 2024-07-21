import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        backgroundColor: props => props.theme.background,
        height: "100%",
        minHeight : '100vb',
        width: "100%",
        fontFamily: 'Arial',
    },
});

export default useStyles;