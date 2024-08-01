import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    searchBar: {
        backgroundColor: props => props.theme.secondary,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: props => props.theme.text,
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        borderRadius: '25px',
        flexDirection: 'row',
        alignItems: 'center',
        marginInline: '3px',
        padding: '1em 1em',
        cursor: 'pointer',
        display: 'flex',
        border: 'none',
        width: '25em',
        height: '25%',
        '@media (max-width: 700px)': {
            justifyContent: 'center',
            padding: '0.5em',
            height: '35%',
            width: '4em',
        }
    },
    input: {
        backgroundColor: props => props.theme.secondary,
        color: props => props.theme.text,
        transition: 'all 0.3s ease',
        padding: '1em 1em',
        border: 'none',
        width: '80%',
        '@media (max-width: 700px)': {
            display: 'none',
        },
        '&:focus': {
            outline: 'none',
        },
    },
    fixedInputContainer: {
        backgroundColor: props => props.theme.secondary,
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)',
        borderRadius: '25px',
        position: 'fixed',
        marginTop: '1em',
        padding: '1em',
        width: '80%',
        left: '7%',
        top: '6em',
        '@media (min-width: 701px)': {
            display: 'none',
        }
    },
    fixedInput: {
        backgroundColor: props => props.theme.secondary,
        color: props => props.theme.text,
        padding: '0.5em',
        border: 'none',
        width: '80%',
        '&:focus': {
            outline: 'none',
        },
    },
    img: {
        paddingInline: '0.5em',
    },
});

export default useStyles;
