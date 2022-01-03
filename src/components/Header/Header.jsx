import React from "react";
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://png.pngtree.com/png-clipart/20190810/ourlarge/pngtree-hand-painted-blue-social-hand-account-dialog-png-image_1685816.jpg" alt="pic"/>
            <div>Welcome to our page</div>
        </header>
    )
}
export default Header;