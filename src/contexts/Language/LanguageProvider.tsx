import { ReactNode, useState } from "react";
import { LanguageContext } from "./LanguagesContext";

import { LangTypes } from "./LanguagesContext";

interface LanguageContextProviderProps {
    children: ReactNode,
}

export const LanguageContextProvider = ({ children }: LanguageContextProviderProps) => {
    const [lang, setLang] = useState<LangTypes>("en-US");

    return (
        <LanguageContext.Provider value={{lang, setLang}}>
            {children}
        </LanguageContext.Provider>
    )
}