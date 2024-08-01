import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        backgroundColor: props => props.theme.secondary,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: props => props.theme.text,
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '8px',
        minHeight: '570px',
        maxHeight: '570px',
        minWidth: '200px',
        margin: '0 auto',
        flex: '1 1 auto',
        maxWidth: '60%',
        padding: '20px',
        display: 'flex',
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
        transition: 'all 0.3s ease',
        borderRadius: '15px',
        marginBottom: '1em',
        padding: '1em 1em',
        marginTop: '1em',
        border: 'none',
        height: '6em',
        width: '80%',
        '&:focus': {
            outline: 'none',
        },
    },
    textarea: {
        backgroundColor: props => props.theme.primary,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: props => props.theme.text,
        transition: 'all 0.3s ease',
        borderRadius: '15px',
        marginBottom: '1em',
        padding: '1em 1em',
        marginTop: '1em',
        resize: 'none',
        border: 'none',
        height: '80vb',
        width: '80%',
        '&:focus': {
            outline: 'none',
        }
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginBottom: '1em',
        padding: '1em 1em',
        marginTop: '1em',
        display: 'flex',
        width: '83%',
    },
});

export default useStyles;