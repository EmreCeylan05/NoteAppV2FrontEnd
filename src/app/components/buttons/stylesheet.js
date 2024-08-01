import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    button: {
        backgroundColor: props => props.theme.primary,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: props => props.theme.text,
        transition: 'all 0.3s ease',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        marginInline: '3px',
        padding: '1em 1em',
        cursor: 'pointer',
        display: 'flex',
        border: 'none',
        '&:hover': {
            backgroundColor: props => props.theme.secondary,
        },
        userSelect: "none",
    },
    usertext: {
        color: "#FF3737"
    }
});
export default useStyles;