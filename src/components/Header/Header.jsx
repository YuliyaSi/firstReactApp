import React from "react";
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://media.istockphoto.com/photos/one-like-social-media-notification-with-heart-icon-picture-id1164769192" alt="pic"/>
            <div>Welcome to our page</div>
        </header>
    )
}
export default Header;