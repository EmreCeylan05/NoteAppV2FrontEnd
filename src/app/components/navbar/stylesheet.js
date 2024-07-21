import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    menu: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '75%',
        height: '100%',
        backgroundColor: props => props.theme.menu,
        color: '#fff',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        '&.open': {
            transform: 'translateX(0)',
        },
        '&.closed': {
            transform: 'translateX(100%)',
        },
        '@media (min-width: 1201px)': {
            display: 'none',
        },
        userSelect: "none",
    },
    burger: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '0.5em',
        height: '6em',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        height: '20em',
        maxWidth: '75%',
        minWidth: '25%',
        marginInline: '2em',
        padding: '2em',
    },
    buttonLine: {
        color: props => props.theme.text,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        gap: '10px',
    },
    text: {
        color: props => props.theme.text,
        paddingInline: '0.2em',
        fontSize: '2em',
    },
    hr: {
        borderColor: props => props.theme.secondary,
    }
});

export default useStyles;
