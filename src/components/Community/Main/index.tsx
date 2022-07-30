import { EducationSession } from "../EducationSession";
import { HomeSession } from "../HomeSession";
import { ProjectsSession } from "../ProjectsSession";

import style from "./style.module.scss";

export default function Main () {

    return (
        <main className={style.wrapper}>

            <div className={style.card}>
                <h1 className={style.title}>
                    Home
                </h1>
                <HomeSession />
            </div>

            <div className={style.card}>
                <h1 className={style.title}>
                    Projects
                </h1>
                
                <ProjectsSession />
                
            </div>

            <div className={style.card}>
                <h1 className={style.title}>
                    Courses
                </h1>

                <EducationSession />
                
            </div>
            <div className={style.card}>
                <h1 className={style.title}>
                    Contact
                </h1>
            </div>
            <div className={style.card}>
                <h1 className={style.title} id="teste">
                    About me
                </h1>
            </div>
        </main>
    )
}