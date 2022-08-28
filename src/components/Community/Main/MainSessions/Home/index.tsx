import { useContext } from "react";
import { LanguageContext } from "../../../../../contexts/Language/LanguagesContext";

import SocialList from "../../../../Population/SocialList";

import { AiFillLinkedin, AiFillGithub, AiFillCodepenCircle } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";

import style from "./style.module.scss";



export function HomeSession () {
    const { lang } = useContext(LanguageContext);

    return (
        <div className={style.homeContent}>
            <div>
                <p>
                    {lang === "en-US" ? "Hi there, I'm" : "Olá, eu sou"}
                </p>
                <h1>
                    Cleidson Oliveira
                </h1>
                <p>
                    {lang === "en-US" ? "Front-end Developer" : "Desenvolvedor Front-end"}
                </p>
            </div>

            <SocialList>
                <a 
                    href="https://www.linkedin.com/in/cleidson-oliveira-963ba7230/"
                    target="_blank"
                >
                    <AiFillLinkedin />
                </a>
                <a 
                    href="https://github.com/Cleidson-Oliveira"
                    target="_blank"
                >
                    <AiFillGithub />
                </a>
                <a 
                    href="https://codepen.io/cleidson-oliveira-the-bashful" 
                    target="_blank"
                >
                        <AiFillCodepenCircle />
                </a>
                <a 
                    href="https://www.cvkeep.com/cv/cleidsonoliveira"
                    target="_blank"
                >
                    <FaRegAddressCard />
                </a>
            </SocialList>
        </div>
    )
}