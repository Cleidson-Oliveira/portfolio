import { ReactNode } from "react";

import style from "./style.module.scss";

interface SocialListProps {
    children: ReactNode
}

export default function SocialList ({ children }: SocialListProps) {
    return (
        <div className={style.socialList}>
            { children }
        </div>
    )
}