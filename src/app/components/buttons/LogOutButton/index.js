import React from "react";
import { useApp } from "../../../context/appcontext";
import darkTheme from '../../../themes/variants/dark/index';
import lightTheme from '../../../themes/variants/light/index';
import useStyles from '../stylesheet';
import { useAuth } from "../../../context/authcontext";
export default function LogOutButton() {
    const { theme , language } = useApp();
    const {setUser } = useAuth();
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const classes = useStyles({ theme: currentTheme });
    const iconPath = theme === "dark" ? `${process.env.PUBLIC_URL}/assets/icons-dark` : `${process.env.PUBLIC_URL}/assets/icons-light`;
    const logout = () => {
        setUser(null)
    }
    const loggedinText = language === "en" ? "Log Out" :"Çıkış Yap ";

    return <button className={classes.button}
        onClick={ logout }
        >
        <img
            src={`${iconPath}/logout.png`}
            style={{ verticalAlign: 'middle', width: '20px', height: '20px' }}
            alt={"exit"} // daha bitmedi
        />
        <span className={classes.usertext}>{loggedinText}</span>
    </button>
}
/**{user && <button onClick={logout}>Çıkış Yap</button> || <button onClick={login}>Giriş Yap</button>} */