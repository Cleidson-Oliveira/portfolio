import style from "./style.module.scss";

import { FiRadio } from "react-icons/fi";
import { GoRepo } from "react-icons/go";

interface FaceCardProps {
    projectData: {
        name: string, 
        image: string, 
        description: string,
        liveProjectUrl: string,
        repoprojectUrl: string,
        techStack: string[],
    }
}

export function FaceCard ({ projectData }: FaceCardProps) {
    return (
        <div className={style.cardFace}>
            <h1>
                { projectData.name }
            </h1>
            <div>
                <div className={style.projectLinks}>
                    <a target="_blank" href={projectData.liveProjectUrl}>
                        <FiRadio />
                        Live Project
                    </a>
                    <a target="_blank" href={projectData.repoprojectUrl}>
                        <GoRepo />
                        Repository
                    </a>
                </div>
                <div>
                    <img src={projectData.image} alt={ projectData.name } />
                </div>
            </div>
            <span>
                { projectData.description }
            </span>
            <span>
                {projectData.techStack.map(item => (
                    <p key={ item }>{ item }</p>
                ))}
            </span>
        </div>
    )
}