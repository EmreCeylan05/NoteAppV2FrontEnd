import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    button: {
        backgroundColor : props => props.theme.secondary,
        color : props => props.theme.text,
        transition: 'all 0.3s ease',
        border : 'none',
        padding: '1em 1em',
        borderRadius: '5px',
        cursor : 'pointer',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        marginInline : '3px',
        '&:hover': {
            backgroundColor: props => props.theme.primary,
        },
        userSelect : "none",
    },
    usertext:{
        color : "#FF3737"
    }
});
export default useStyles;