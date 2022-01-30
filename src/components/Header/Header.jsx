import React, {useEffect} from "react";
import s from './Header.module.css'
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router";

const Header = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        if (!props.isAuth){
            return navigate("/login");
        }
    },[props.isAuth, navigate]);

    return (
        <header className={s.header}>
            <div className={s.img}>
                <img src={logo} alt="pic"/>
            </div>
            <div>Welcome to our page</div>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div className={s.loginHolder}>
                        <span>{props.login}</span>
                            <button onClick={props.logoutUser}>Log Out</button>

                    </div> :
                    <button><NavLink to={'login'}>Login</NavLink></button>}
            </div>
        </header>
    )
}
export default Header;