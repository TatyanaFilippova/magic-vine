import React from "react";
import css from "./Header.module.css"

interface HeaderProps{
    title?: string;
    text?: string;
}


function Header(
    { title, text }: HeaderProps

){
    return (
        <div className={css.container}>
        <div className={css.img}></div>
        <div className={css.text}>{text}</div>
        <div className={css.number}></div>
    </div>)
}

export default Header