import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '25em',
        backgroundColor: props => props.theme.secondary,
        color: props => props.theme.text,
        transition: 'all 0.3s ease',
        padding: '1em 1em',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        alignItems: 'center',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginInline: '3px',
        height: '25%',
        '@media (max-width: 700px)': {
            width: '4em',
            height: '35%',
            padding: '0.5em',
            justifyContent: 'center',
        }
    },
    img: {
        paddingInline: '0.5em',
    },
    input: {
        backgroundColor: props => props.theme.secondary,
        color: props => props.theme.text,
        transition: 'all 0.3s ease',
        border: 'none',
        padding: '1em 1em',
        width: '80%',
        '&:focus': {
            outline: 'none',
        },
        '@media (max-width: 700px)': {
            display: 'none',
        }
    },
    fixedInputContainer: {
        position: 'fixed',
        top: '6em',
        left: '7%',
        width: '80%',
        backgroundColor: props => props.theme.secondary,
        padding: '1em',
        marginTop: '1em',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)',
        borderRadius: '25px',
        '@media (min-width: 701px)': {
            display: 'none',
        }
    },
    fixedInput: {
        width: '80%',
        padding: '0.5em',
        backgroundColor: props => props.theme.secondary,
        color: props => props.theme.text,
        border: 'none',
        '&:focus': {
            outline: 'none',
        },
    }
});

export default useStyles;
