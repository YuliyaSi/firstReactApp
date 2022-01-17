import React from "react";
import s from './Header.module.css'
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.img}>
                <img src={logo} alt="pic"/>
            </div>
            <div>Welcome to our page</div>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login:</NavLink>}

            </div>
        </header>
    )
}
export default Header;