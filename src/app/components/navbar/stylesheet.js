import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    menu: {
        backgroundColor: props => props.theme.menu,
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease',
        position: 'fixed',
        height: '100%',
        color: '#fff',
        width: '75%',
        zIndex: 1000,
        right: 0,
        top: 0,
        '&.closed': {
            transform: 'translateX(100%)',
        },
        '&.open': {
            transform: 'translateX(0)',
        },
        '@media (min-width: 1201px)': {
            display: 'none',
        },
        userSelect: "none",
    },
    burger: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '0.5em',
        display: 'flex',
        height: '6em',
    },
    buttonContainer: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'baseline',
        marginInline: '2em',
        maxWidth: '75%',
        minWidth: '25%',
        display: 'flex',
        height: '20em',
        padding: '2em',
    },
    buttonLine: {
        color: props => props.theme.text,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
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
