import { useContext } from "react";
import { LanguageContext } from "../../../../../contexts/Language/LanguagesContext";

import AboutData from "./DataAbout/index.json";

import style from "./style.module.scss";

export function AboutMe () {

    const { lang } = useContext(LanguageContext);

    return (
        <div className={style.about}>
            <h2>{AboutData[lang].title}</h2>
            <p>{AboutData[lang].text}</p>
        </div>
    )
}