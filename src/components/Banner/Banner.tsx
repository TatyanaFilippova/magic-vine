import React from "react";
import css from "./Banner.module.scss"
import fotoBanner from "../../assets/fotoBanner.png"
import pngwing from "../../assets/pngwing.png"

function Banner(){
    return(
        <div className={css.wrapper}>
            <div className={css.container}>
                <div className={css.title}>Магия из бумажной лозы</div>
                <div className={css.description}>Производство ручных высококачественных изделий из бумажной лозы</div>
                <div className={css.author}>Ирина Филиппова</div>
            </div>
            <img src={fotoBanner.src} className={css.img}></img>
            <img src={pngwing.src} className={css.img2}></img>
        </div>
    )
}

export default Banner