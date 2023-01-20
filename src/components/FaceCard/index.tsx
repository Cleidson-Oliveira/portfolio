import { useContext } from "react";
import { LanguageContext } from "../../contexts/Language/LanguagesContext";

import { FiRadio } from "react-icons/fi";
import { GoRepo } from "react-icons/go";

import style from "./style.module.scss";

interface ProjectDataType {
    name: string, 
    image: string, 
    description: {
        "pt-BR": string,
        "en-US": string,
        "es-ES": string,
    },
    liveProjectUrl: string,
    repoprojectUrl: string,
    techStack: string[],
}

interface FaceCardProps {
    projectData: ProjectDataType | null
}

export function FaceCard ({ projectData }: FaceCardProps) {

    const { lang } = useContext(LanguageContext);

    return (
        <div className={style.cardFace}>
            { projectData 
                ? <>
                    <h1>
                        { projectData.name }
                    </h1>
                    <div>
                        <div className={style.projectLinks}>
                            {
                                projectData.liveProjectUrl === ''
                                ? <span>
                                    <FiRadio />
                                    {lang === "en-US" ? "Live Project" : "Projeto ao vivo"}
                                    
                                </span>
                                : <a target="_blank" href={projectData.liveProjectUrl}>
                                    <FiRadio />
                                    {lang === "en-US" ? "Live Project" : "Projeto ao vivo"}
                                </a>
                            }

                            <a target="_blank" href={projectData.repoprojectUrl}>
                                <GoRepo />
                                {lang === "en-US" ? "Repository" : "Repositório"}

                            </a>
                        </div>
                        <div>
                            {
                                projectData.image === "" 
                                ? <div>loading...</div> 
                                : <img src={projectData.image} alt={ projectData.name } />
                            }
                        </div>
                    </div>
                    <span>
                        { projectData.description[lang] }
                    </span>
                    <span>
                        {projectData.techStack.map(item => (
                            <p key={ item }>{ item }</p>
                        ))}
                    </span>
                </>
                : <div>
                    <p>Loading...</p>
                </div>
            }
        </div>
    ) 
}