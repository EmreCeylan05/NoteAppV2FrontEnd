import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        backgroundColor: props => props.theme.secondary,
        color: props => props.theme.text,
        maxWidth: '500px',
        width: '100%',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '15%',
        minHeight: '570px',
        maxHeight: '570px',
        minWidth: '200px',
        flex: '1 1 auto',
        userSelect: 'none',
        '@media (max-width: 768px)': {
            maxWidth: '100%',
            padding: '15px',
        },

        '@media (max-width: 480px)': {
            padding: '10px',
        }
    },
    input: {
        backgroundColor: props => props.theme.primary,
        color: props => props.theme.text,
        border: 'none',
        padding: '1em 1em',
        height: '3em',
        width: '80%',
        borderRadius: '15px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        '&:focus': {
            outline: 'none',
        },
    },
});

export default useStyles;