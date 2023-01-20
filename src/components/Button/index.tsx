import { ReactNode } from "react";
import style from "./style.module.scss";

interface ButtonProps {
    onClick: () => void
    children: ReactNode
}

export function Button ({ children, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={ style.button }
        >
            { children }
        </button>
    )
}
