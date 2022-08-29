import { useContext } from "react";
import { LanguageContext } from "../../../contexts/Language/LanguagesContext";
import { AboutMe } from "./MainSessions/About";
import { Contact } from "./MainSessions/Contact";
import { EducationSession } from "./MainSessions/Education";
import { HomeSession } from "./MainSessions/Home";
import { ProjectsSession } from "./MainSessions/Projects";

import style from "./style.module.scss";

export default function Main () {

    const { lang } = useContext(LanguageContext);

    return (
        <main className={style.wrapper}>

            <section className={style.card}>
                <h1 className={style.title}>
                    {lang === "en-US" ? "Home" : "Início"}
                </h1>
                <HomeSession />
            </section>

            <section className={style.card}>
                <h1 className={style.title} id="teste">
                    {lang === "en-US" ? "About me" : "Sobre"}
                </h1>
                <AboutMe />
            </section>

            <section className={style.card}>
                <h1 className={style.title}>
                    {lang === "en-US" ? "Projects" : "Projetos"}
                </h1>
                <ProjectsSession />
            </section>

            <section className={style.card}>
                <h1 className={style.title}>
                    {lang === "en-US" ? "Education" : "Cursos"}
                </h1>
                <EducationSession />
            </section>
            
            <section className={style.card}>
                <h1 className={style.title}>
                    {lang === "en-US" ? "Contact" : "Contato"}
                </h1>
                <Contact />
            </section>

        </main>
    )
}