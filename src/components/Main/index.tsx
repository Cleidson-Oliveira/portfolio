import style from "./style.module.scss";

export default function Main () {

    return (
        <main className={style.wrapper}>
            {/* <div className={style.card}>
                <h1 className={style.title}>
                    Home
                </h1>
                <div className={style.homeContent}>
                    <div>
                        <p>
                            Hi there, I'm
                        </p>
                        <h1>
                            Cleidson Oliveira
                        </h1>
                        <p>
                            Front-end Developer
                        </p>
                    </div>
                </div>
            </div> */}
            <div className={style.card}>
                <h1 className={style.title}>
                    Projects
                </h1>
                
                <div className={style.projectsContent}>
                    <div>
                        <p>
                            Hi there, I'm
                        </p>
                        <h1>
                            Cleidson Oliveira
                        </h1>
                        <p>
                            Front-end Developer
                        </p>
                    </div>
                    <div>
                        <p>
                            Hi there, I'm
                        </p>
                        <h1>
                            Cleidson Oliveira
                        </h1>
                        <p>
                            Front-end Developer
                        </p>
                    </div>
                    <div>
                        <p>
                            Hi there, I'm
                        </p>
                        <h1>
                            Cleidson Oliveira
                        </h1>
                        <p>
                            Front-end Developer
                        </p>
                    </div>
                    <div>
                        <p>
                            Hi there, I'm
                        </p>
                        <h1>
                            Cleidson Oliveira
                        </h1>
                        <p>
                            Front-end Developer
                        </p>
                    </div>
                </div>
                
            </div>
            <div className={style.card}>
                <h1 className={style.title}>
                    Courses
                </h1>
            </div>
            <div className={style.card}>
                <h1 className={style.title}>
                    Contact
                </h1>
            </div>
            <div className={style.card}>
                <h1 className={style.title}>
                    About me
                </h1>
            </div>
        </main>
    )
}