import avatar from "../../../assets/images/Cleidson.jpg"
import Navigation from "../Navigation";

import style from "./style.module.scss";

export default function Header () {
    return (
        <div className={style.header}>
            <div className={style.about} >
                <img
                    className={style.avatar}
                    src={avatar}
                    alt="Cleidson"
                />
                <p>
                    Hi! <br />
                    I'm Cleidson Oliveira, <br />
                    I'm a Front-end developer.
                </p>
            </div>
            <Navigation />
        </div>
    )
}