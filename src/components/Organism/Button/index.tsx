import { ReactElement } from "react";
import style from "./style.module.scss";

interface ButtonProps {
    children: ReactElement
}

export function Button ({ children }: ButtonProps) {
    return (
        <button className={`${style.button} active`}>
            { children }
        </button>
    )
}
