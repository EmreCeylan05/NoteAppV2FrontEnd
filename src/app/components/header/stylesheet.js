import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    headerContainer: {
        backgroundColor: props => props.theme.primary,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        flexDirection: 'row',
        alignItems: 'center',
        userSelect: 'none',
        display: 'flex',
        width: '100%',
        height: '6em',
    },
    userPhoto: {
        borderRadius: '50%',
        marginInline: '1em',
        height: '4em',
    },
    userContainer: {
        justifyContent: 'flex-start',
        transition: 'all 0.3s ease',
        flexDirection: 'row',
        display: 'flex',
    },
    userText: {
        color: props => props.theme.text,
        transition: 'all 0.3s ease',
        flexDirection: 'column',
        alignItems: 'baseline',
        display: 'flex',
        width: '140px',
        '@media (max-width: 600px)': {
            display: 'none',
        }
    },
    buttonContainer: {
        backgroundColor: props => props.theme.secondary,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        justifyContent: 'space-between',
        paddingInline: '0.5em',
        marginInline: '0.5em',
        borderRadius: '15px',
        alignItems: 'center',
        flexDirection: 'row',
        minWidth: '9em auto',
        maxWidth: '15em',
        display: 'flex',
        height: '65%',
        width: '12em',
        '@media (max-width: 1200px)': {
            display: 'none',
        }
    },
    burger: {
        backgroundColor: props => props.theme.secondary,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        justifyContent: 'space-between',
        paddingInline: '0.5em',
        marginInline: '0.5em',
        borderRadius: '15px',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        width: '3.3em',
        height: '65%',
        '@media (min-width: 1201px)': {
            display: 'none',
        }
    },
});

export default useStyles;
