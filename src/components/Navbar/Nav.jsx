import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='Profile' className={ navData => navData.isActive ? styles.activeLink : styles.item } >Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="Dialogs" className={ navData => navData.isActive ? styles.activeLink : styles.item }>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="News" className={ navData => navData.isActive ? styles.activeLink : styles.item }>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="Music" className={ navData => navData.isActive ? styles.activeLink : styles.item }>Music</NavLink>
            </div><div className={styles.item}>
                <NavLink to="Users" className={ navData => navData.isActive ? styles.activeLink : styles.item }>Users</NavLink>
            </div>

            <br/><br/>
            <div className={styles.item}>
                <NavLink to="Settings" className={ navData => navData.isActive ? styles.activeLink : styles.item }>Settings</NavLink>
            </div>
            <div className={styles.side}>
                <div className={styles.item}>Friends</div>
                <div className={styles.circles}>
                    <div className={styles.circle}> </div>
                    <div className={styles.circle}> </div>
                    <div className={styles.circle}> </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;