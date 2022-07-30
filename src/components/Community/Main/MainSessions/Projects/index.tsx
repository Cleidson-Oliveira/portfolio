import { useRef, useState } from "react";
import { FaceCard } from "../../../FaceCard";

import style from "./style.module.scss";

interface ProjectData {
    name: string,
    image: string,
    description: string,
}

export const ProjectsSession = () => {

    const projectsData = [
        {
            name: "Ângela Reys Fotografia",
            image: "Project image",
            description: "Text about this project, text about this project, text about this project, text about this project, text about this project, text about this project",
        },
        {
            name: "5Ws",
            image: "Project image",
            description: "Text about this project, text about this project, text about this project, text about this project, text about this project, text about this project",
        },
        {
            name: "Yu-Gi-Tools",
            image: "Project image",
            description: "Text about this project, text about this project, text about this project, text about this project, text about this project, text about this project",
        },
        {
            name: "Em breve",
            image: "Project image",
            description: "Text about this project, text about this project, text about this project, text about this project, text about this project, text about this project",
        },
    ]

    const [flip, setFlip] = useState(false)
    const [firstFaceCard, setFirstFaceCard] = useState<ProjectData>(projectsData[0])
    const [secondFaceCard, setSecondFaceCard] = useState<ProjectData>(projectsData[1])

    const cardFace = useRef<'face1' | 'face2'>('face1');

    const handleFlipState = () => {
        setFlip(prevState => !prevState)   
    }
    
    const changeFaceCardData = (nameParam: string) => {
        let data: ProjectData;

        projectsData.forEach((projectData) => {
            if (projectData.name == nameParam) {
                data = projectData
            }
        })

        cardFace.current = cardFace.current == "face1" ? "face2" : "face1";
        cardFace.current == "face1"
        ? setFirstFaceCard(data!)
        : setSecondFaceCard(data!)
    }

    const flipCard = (name: string) => {

        if ( cardFace.current == "face1" && name == firstFaceCard.name ) {
            return;
        }

        if ( cardFace.current == "face2" && name == secondFaceCard.name ) {
            return;
        }

        changeFaceCardData(name);
        handleFlipState();
    }

    return (
        <div className={style.projectsContent}>
            <nav className={style.menuProjects}>
                {projectsData.map(({name})=>(
                    <button
                        key={name}
                        onClick={() => {flipCard(name)}}
                    >
                        {name}
                    </button>
                ))}
            </nav>
            <div className={flip == true ? style.cardProjectFlip : style.cardProject}>
                <FaceCard projectData={firstFaceCard} />
                <FaceCard projectData={secondFaceCard} />
            </div>
        </div>
    )
}