import { EducationSession } from "./MainSessions/Education";
import { HomeSession } from "./MainSessions/Home";
import { ProjectsSession } from "./MainSessions/Projects";

import style from "./style.module.scss";

export default function Main () {

    return (
        <main className={style.wrapper}>

            <section className={style.card}>
                <h1 className={style.title}>
                    Home
                </h1>
                <HomeSession />
            </section>

            <section className={style.card}>
                <h1 className={style.title}>
                    Projects
                </h1>
                <ProjectsSession />
            </section>

            <section className={style.card}>
                <h1 className={style.title}>
                    Education
                </h1>
                <EducationSession />
            </section>
            <section className={style.card}>
                <h1 className={style.title}>
                    Contact
                </h1>
            </section>
            <section className={style.card}>
                <h1 className={style.title} id="teste">
                    About me
                </h1>
            </section>
        </main>
    )
}