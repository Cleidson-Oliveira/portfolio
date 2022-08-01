import SocialList from "../../Population/SocialList";

import style from "./style.module.scss";

export default function Footer () {
    return (
        <footer className={style.footer}>
            <SocialList />
            <p>
                Cleidson Oliveira 2022 <br />
                All rights reserved
            </p>
        </footer>
    )
}