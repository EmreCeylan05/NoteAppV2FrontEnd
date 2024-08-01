import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    noteFrame: {
        maxHeight: props => (props.isExpanded ? '640px' : '320px'),
        minHeight: props => (props.isExpanded ? '640px' : '320px'),
        maxWidth: props => (props.isExpanded ? '960px' : '480px'),
        backgroundColor: props => props.theme.primary,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: props => props.theme.text,
        transition: 'all 0.3s ease',
        flexDirection: 'column',
        borderRadius: '8px',
        minWidth: '200px',
        flex: '1 1 auto',
        padding: '20px',
        display: 'flex',
        margin: '10px',
        width: '100%',
        '@media (max-width: 768px)': {
            maxWidth: '100%',
            padding: '15px',
        },
        '@media (max-width: 480px)': {
            padding: '10px',
        }
    },
    title: {
        marginBottom: '10px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    content: {
        whiteSpace: 'break-spaces',
        textOverflow: 'ellipsis',
        marginBottom: '20px',
        overflow: 'hidden',
        fontSize: '1rem',
        height: '90%',
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        display: 'flex',
        width: '100%',
    },
    input: {
        backgroundColor: props => props.theme.secondary,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: props => props.theme.text,
        transition: 'all 0.3s ease',
        borderRadius: '15px',
        padding: '1em 1em',
        border: 'none',
        height: '3em',
        width: '80%',
        '&:focus': {
            outline: 'none',
        },
    },
    textarea: {
        backgroundColor: props => props.theme.secondary,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: props => props.theme.text,
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
});

export default useStyles;