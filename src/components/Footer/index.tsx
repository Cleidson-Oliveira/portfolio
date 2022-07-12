import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

import style from "./style.module.scss";

export default function Footer () {
    return (
        <footer className={style.footer}>
            <a 
                className={style.socialIcom}
                href="https://www.linkedin.com/in/cleidson-oliveira-963ba7230/"
            >
                <FaLinkedin />
            </a>
            <a 
                className={style.socialIcom}
                href="https://github.com/Cleidson-Oliveira"
            >
                <AiOutlineGithub />
            </a>
        </footer>
    )
}