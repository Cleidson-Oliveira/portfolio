import style from "./style.module.scss";

interface FaceCardProps {
    projectData: {
        name: string, 
        image: string, 
        description: string,
    }
}

export function FaceCard ({ projectData }: FaceCardProps) {
    return (
        <div className={style.cardFace}>
            <h1>
                { projectData.name }
            </h1>
            <div>
                <div>
                    <a>Live</a>
                    <a>Repo</a>
                </div>
                <div>
                    <img src={projectData.image} alt={ projectData.name } />
                </div>
            </div>
            <span>
                { projectData.description }
            </span>
        </div>
    )
}