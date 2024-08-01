import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        backgroundColor: props => props.theme.background,
        fontFamily: 'Arial',
        minHeight : '100vb',
        height: "100%",
        width: "100%",
    },
});

export default useStyles;