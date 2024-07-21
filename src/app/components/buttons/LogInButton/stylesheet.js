import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    button: {
        backgroundColor: props => props.theme.blue,
        color: '#ffffff',
        border: 'none',
        padding: '1em 1em',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginInline: '3px',
        width: '80%',
    },
    usertext: {
        color: "#ffffff"
    }
});
export default useStyles;