import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        backgroundColor: props => props.theme.secondary,
        color: props => props.theme.text,
        transition: 'all 0.3s ease',
        maxWidth: '60%',
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
        transition: 'all 0.3s ease',
        border: 'none',
        padding: '1em 1em',
        marginTop: '1em',
        marginBottom: '1em',
        height: '6em',
        width: '80%',
        borderRadius: '15px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        '&:focus': {
            outline: 'none',
        },
    },
    textarea: {
        height: '80vb',
        width: '80%',
        resize: 'none',
        border: 'none',
        padding: '1em 1em',
        marginTop: '1em',
        marginBottom: '1em',
        color: props => props.theme.text,
        backgroundColor: props => props.theme.primary,
        transition: 'all 0.3s ease',
        borderRadius: '15px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        '&:focus': {
            outline: 'none',
        }
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '83%',
        justifyContent: 'flex-end',
        marginTop: '1em',
        marginBottom: '1em',
        padding: '1em 1em',
    },
});

export default useStyles;