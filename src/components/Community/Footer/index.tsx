import SocialList from "../../Population/SocialList";

import style from "./style.module.scss";

export default function Footer () {
    return (
        <footer className={style.footer}>
            <SocialList />
            <p>
                © Copyright 2022 All rights reserved
            </p>
        </footer>
    )
}