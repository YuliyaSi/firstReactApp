import React from "react";
import styles from '../modules/Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <div>
                    <p>Profile</p>
                </div>
                <div>
                    <p>Messages</p>
                </div>
                <div>
                    <p>News</p>
                </div>
                <div>
                    <p>Music</p>
                </div>
                <div>
                    <p>Settings</p>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;