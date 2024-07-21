import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    button: {
        backgroundColor : props => props.theme.primary,
        color : props => props.theme.text,
        transition: 'all 0.3s ease',
        border : 'none',
        padding: '1em 1em',
        borderRadius: '5px',
        cursor : 'pointer',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        marginInline : '3px',
        '&:hover': {
            backgroundColor: props => props.theme.secondary,
        },
        userSelect : "none",
    },
    usertext:{
        color : "#FF3737"
    }
});
export default useStyles;