import SocialList from "../../Population/SocialList";

import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

import style from "./style.module.scss";

export default function Footer () {
    return (
        <footer className={style.footer}>
            <SocialList>
                <a 
                    href="https://www.linkedin.com/in/cleidson-oliveira-963ba7230/"
                    target="_blank"
                >
                    <FaLinkedin />
                </a>
                <a 
                    href="https://github.com/Cleidson-Oliveira"
                    target="_blank"
                >
                    <AiOutlineGithub />
                </a>
            </SocialList>
            <p>
                Cleidson Oliveira 2022 <br />
                All rights reserved
            </p>
        </footer>
    )
}