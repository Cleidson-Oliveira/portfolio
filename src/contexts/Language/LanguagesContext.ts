import { createContext } from "react";

export type LangTypes = "pt-BR" | "en-US" | "es-ES";

export interface LanguagesTypes {
    lang: LangTypes,
    setLang: (value: LangTypes) => void,
}

export const LanguageContext = createContext<LanguagesTypes>({} as LanguagesTypes)
