import style from "./style.module.scss";

export default function Main () {

    return (
        <main className={style.wrapper}>
            <div className={style.card}>
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
            </div>
            <div className={style.card}>
                <h1 className={style.title}>
                    Projects
                </h1>
                
                <div className={style.projectsContent}>
                    <nav className={style.menuProjects}>
                        <button>Ângela Reys Fotografia</button>
                        <button>5Ws</button>
                        <button>Yu-Gi-tools</button>
                        <button>Em breve</button>
                        <button>Em breve</button>
                        <button>Em breve</button>
                    </nav>
                    <div className={style.cardProject}>

                        <h1>
                            Cleidson Oliveira
                        </h1>
                        <div>
                            Project image
                        </div>
                        <span>
                            Text about this project, text about this project, text about this project, text about this project, text about this project, text about this project
                        </span>
                        
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