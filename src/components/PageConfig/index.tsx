import { Button } from "../Button";
import { BsTranslate } from "react-icons/bs";

import style from "./style.module.scss";
import { useContext } from "react";
import { LangTypes, LanguageContext } from "../../contexts/Language/LanguagesContext";

export function PageConfig () {

    const languages = ["pt-BR", "en-US"] as LangTypes[];

    const { lang, setLang } = useContext(LanguageContext)

    const ChangeLanguage = () => {
        let newLang = "en-US" as LangTypes;

        languages.forEach((language, index) => {
            if(language === lang) {
                newLang = languages[index + 1] || languages[0]
            }
        })
        
        setLang(newLang)
    }

    return (
        <div className={style.menuConfig}>
            <Button onClick={ChangeLanguage}>
                <BsTranslate />
            </Button>
        </div>
    )
}