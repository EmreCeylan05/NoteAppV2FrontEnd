import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '25em',
        backgroundColor: props => props.theme.secondary,
        color: props => props.theme.text,
        padding: '1em 1em',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        alignItems: 'center',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginInline: '3px',
        height: '25%',
        '@media (max-width: 600px)': {
            width: '3em',
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
        border: 'none',
        padding: '1em 1em',
        width: '80%',
        '&:focus': {
            outline: 'none',
        },
        '@media (max-width: 700px)': {
            display: 'none',
        }
    }
});

export default useStyles;
