import React from "react";
import styles from './Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <div>
                    <a href='Profile'>Profile</a>
                </div>
                <div>
                    <a href="Dialogs">Messages</a>
                </div>
                <div>
                    <a href="News">News</a>
                </div>
                <div>
                    <a href="Music">Music</a>
                </div>
                <div>
                    <a href="Settings">Settings</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;