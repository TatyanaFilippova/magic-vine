import React from "react";
import css from "./Footer.module.scss"
import logo from "../../assets/logo.png"

interface FooterProps {

    number?: string;
    address?: string;
}

function Footer({number,address}:FooterProps){
    return(
        <div className={css.container} >
            <div className={css.imgWrapper}><img src={logo.src} className={css.img}></img></div>
            <div className={css.container2}>


                <div className={css.number}>{number}</div>
                <div className={css.container3}>
                    <div>Продукция</div>
                    <div>Как заказатья</div>
                    <div>О нас</div>
                </div>
                <div className={css.address}>{address}</div>
            </div>


        </div>
    )
}

export default Footer