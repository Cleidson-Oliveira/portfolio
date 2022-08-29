import { useRef, useState } from "react";
import { FaceCard } from "../../../FaceCard";

import projectsData from "./DataProjects/index.json";

import style from "./style.module.scss";

interface ProjectData {
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

export const ProjectsSession = () => {

    const invisibleCard = {
        name: "Loading...",
        image: "",
        description: {
            "pt-BR": "Carregando...",
            "en-US": "Loading...",
            "es-ES": "",
        },
        liveProjectUrl: "",
        repoprojectUrl: "",
        techStack: [],
    }

    const [flip, setFlip] = useState(false)
    const [firstFaceCard, setFirstFaceCard] = useState<ProjectData>(projectsData[0])
    const [secondFaceCard, setSecondFaceCard] = useState<ProjectData>(invisibleCard)
    const [buttonActive, setButtonActive] = useState(projectsData[0].name)

    const cardFace = useRef<'face1' | 'face2'>('face1');

    const handleFlipState = () => {
        setFlip(prevState => !prevState);
    }

    const handleButtonActive = (name: string) => {
        setButtonActive(name);
    }
    
    const changeFaceCardData = (nameParam: string) => {
        let data: ProjectData;

        projectsData.forEach((projectData) => {
            if (projectData.name == nameParam) {
                data = projectData;
            }
        })

        cardFace.current = cardFace.current == "face1" ? "face2" : "face1";

        if (cardFace.current == "face1") {
            setFirstFaceCard(data!);
            setTimeout(() => {
                setSecondFaceCard(invisibleCard);
            }, 200); 
        } else {
            setSecondFaceCard(data!);
            setTimeout(() => {
                setFirstFaceCard(invisibleCard);
            }, 200); 
        }
    
    }

    const flipCard = (name: string) => {

        if ( cardFace.current == "face1" && name == firstFaceCard.name ) {
            return;
        }

        if ( cardFace.current == "face2" && name == secondFaceCard.name ) {
            return;
        }

        changeFaceCardData(name);
        handleButtonActive(name);
        handleFlipState();
    }

    return (
        <div className={style.projectsContent}>
            <nav className={style.menuProjects}>
                {projectsData.map(({name})=>(
                    <button
                        className={buttonActive == name ? style.active : ''}
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