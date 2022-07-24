import avatar from "../../../../assets/images/Cleidson.jpg";

import style from "./style.module.scss";

export function Avatar () {
    return (
        <div
            className={style.avatar}
        >
            <img
                src={avatar}
                alt="Cleidson Oliveira"
            />
        </div>
    )
}