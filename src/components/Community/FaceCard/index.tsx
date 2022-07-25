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
                { projectData.image }
            </div>
            <span>
                { projectData.description }
            </span>
        </div>
    )
}