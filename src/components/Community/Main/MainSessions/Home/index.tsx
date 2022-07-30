import style from "./style.module.scss";

export function HomeSession () {

    return (
        <>
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
        </>
    )
}