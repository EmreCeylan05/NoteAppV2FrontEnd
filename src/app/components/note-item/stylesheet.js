import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    noteFrame: {
        backgroundColor: props => props.theme.primary,
        color: props => props.theme.text,
        maxWidth: '480px',
        width: '100%',
        margin : '10px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        display : 'flex',
        flexDirection : 'column',
        minHeight : '320px',
        maxHeight : '320px',
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
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    content: {
        fontSize: '1rem',
        marginBottom: '20px',
        height: '30vb',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'break-spaces',
    },
    buttonContainer: {
        display: 'flex',
        width : '100%',
        justifyContent: 'flex-end',
    },
    input: {
        backgroundColor: props => props.theme.secondary,
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
    textarea: {
        height: '80vb',
        width: '80%',
        resize: 'none',
        border: 'none',
        padding: '1em 1em',
        marginTop: '1em',
        marginBottom: '1em',
        color: props => props.theme.text,
        backgroundColor: props => props.theme.secondary,
        borderRadius: '15px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        '&:focus': {
            outline: 'none',
        }
    },
});

export default useStyles;
