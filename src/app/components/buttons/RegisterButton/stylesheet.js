import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    button: {
        backgroundColor: props => props.theme.green,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        marginBottom: '10%',
        marginInline: '3px',
        padding: '1em 1em',
        cursor: 'pointer',
        color: '#ffffff',
        display: 'flex',
        border: 'none',
        width: '80%',
    },
    usertext: {
        color: "#ffffff"
    }
});
export default useStyles;