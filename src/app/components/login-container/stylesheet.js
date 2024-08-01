import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        backgroundColor: props => props.theme.secondary,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: props => props.theme.text,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '8px',
        minHeight: '570px',
        userSelect: 'none',
        maxHeight: '570px',
        minWidth: '200px',
        maxWidth: '500px',
        margin: '0 auto',
        flex: '1 1 auto',
        display: 'flex',
        padding: '20px',
        width: '100%',
        gap: '15%',
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
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: props => props.theme.text,
        borderRadius: '15px',
        padding: '1em 1em',
        border: 'none',
        height: '3em',
        width: '80%',
        '&:focus': {
            outline: 'none',
        },
    },
});

export default useStyles;