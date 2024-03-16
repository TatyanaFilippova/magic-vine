import React from "react";
import css from "./BannerMiddle.module.css"
import stock from "./../../assets//stock.png"

import Button from "..//Button/Button"

interface BannerMiddleProps{
    description?: string;
    text1?: string;
    text2?: string;

}


function BannerMiddle(
    {description,text1,text2}: BannerMiddleProps
){
    return(
        <div className={css.container}>
            <img src={stock.src} className={css.img}></img>
            <div className={css.banner}>
                <div className={css.description}>{description}</div>
                <div className={css.text1}>{text1}</div>
                <div className={css.text2}>{text2}</div>
                <Button></Button>

            </div>


        </div>
    )
}


export default BannerMiddle