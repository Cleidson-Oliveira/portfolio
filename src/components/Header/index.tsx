import { Avatar } from "../Avatar";

import style from "./style.module.scss";

export default function Header () {
    return (
        <div className={style.header}>
            <div className={style.about} >
                <Avatar />
                <p>
                    Cleidson Oliveira <br />
                    <span>Front-end developer</span>
                </p>
            </div>
        </div>
    )
}