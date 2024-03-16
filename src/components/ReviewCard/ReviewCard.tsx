import React from "react";
import css from "./ReviewCard.module.css"
import foto from "..//..//assets/foto.png"

interface ReviewCard{
    text1?: string;
    text2?: string;
}

function ReviewCard({text1,text2}:ReviewCard){
    return(
        <div className={css.container}>
            <img src={foto.src} className={css.img}></img>
            <div className={css.text1}>{text1}</div>
            <div className={css.text2}>{text2}</div>
        </div>
    )
}

export default ReviewCard