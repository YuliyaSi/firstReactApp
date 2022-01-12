import React from "react";
import s from './Header.module.css'
import logo from '../../assets/images/logo.png'


const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.img}>
                <img src={logo} alt="pic"/>
            </div>
            <div>Welcome to our page</div>
        </header>
    )
}
export default Header;