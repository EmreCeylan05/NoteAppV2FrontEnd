import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    headerContainer: {
        backgroundColor : props => props.theme.primary,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        width: '100%',
        height: '6em',
        userSelect:'none',
    },
    userPhoto: {
        borderRadius: '50%',
        height: '4em',
        marginInline: '1em',
    },
    userContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    userText: {
        color : props=> props.theme.text,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        width : '140px',
        '@media (max-width: 600px)': {
            display: 'none',
        }
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '65%',
        maxWidth: '15em',
        width :'12em',
        minWidth :'9em auto',
        borderRadius: '15px',
        paddingInline: '0.5em',
        marginInline: '0.5em',
        backgroundColor: props => props.theme.secondary,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        '@media (max-width: 1200px)': {
            display: 'none',
        }
    },
    burger:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '65%',
        width: '3.3em',
        borderRadius: '15px',
        paddingInline: '0.5em',
        marginInline: '0.5em',
        backgroundColor: props => props.theme.secondary,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        '@media (min-width: 1201px)': {
            display: 'none',
        }
    },
});

export default useStyles;
