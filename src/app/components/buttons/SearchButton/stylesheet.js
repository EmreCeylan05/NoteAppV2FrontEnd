import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    button: {
        backgroundColor: props => props.theme.secondary,
        color: props => props.theme.text,
        transition: 'all 0.3s ease',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        marginInline: '3px',
        padding: '1em 1em',
        userSelect: "none",
        cursor: 'pointer',
        display: 'flex',
        border: 'none',
        '&:hover': {
            backgroundColor: props => props.theme.primary,
        },
    },
});
export default useStyles;