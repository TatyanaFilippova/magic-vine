import React from "react";
import css from "./Header.module.scss"
import logo from "../../assets/logo.png"

function Header(){
    return (
        <div className={css.container}>
            <img src={logo.src} className={css.img}></img>
            <div className={css.containerText}>
                <div className={css.text}>Товары</div>
                <div className={css.text2}>Как заказать</div>
                <div className={css.text3}>О нас</div>
            </div>

            <div className={css.number}>8 800 55 35 35</div>
        </div>)
}

export default Header