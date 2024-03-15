import React from "react";
import css from "./Button.module.css"

interface ButtonProps{
    variant?: "blue"|"green";
}

function Button({ variant }: ButtonProps) {
    return (
        <button
            className={variant === 'green' ? css.green : css.blue}
        >
            кнопка
        </button>)

}

export default Button