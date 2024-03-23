import React from "react";
import css from "./ProductCard.module.scss"


interface ProductCardProps{
    title?: string;
    text?: string;
}


function ProductCard(
    { title, text }: ProductCardProps

){
    return(
        <div className={css.container}>
            <div className={css.img}></div>
            <div className={css.title}>{title}</div>
            <div className={css.text}>{text}</div>
        </div>
    )
}


export default ProductCard