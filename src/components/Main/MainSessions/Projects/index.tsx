import { useEffect, useRef, useState } from "react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { FaceCard } from "../../../FaceCard";

import style from "./style.module.scss";

interface DescriptionsType {
    portuguese: string,
    english: string
}

interface PrismicData {
    demo: string,
    descriptions: DescriptionsType[],
    repo: string,
    tech_stak: {tech: string}[],
    thumb: { url: string },
    title:  string,
    type: "front-end" | "mobile" | "back-end"
}

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

    const [ documents ] = useAllPrismicDocumentsByType("project");

    const [ projectsData, setProjectsData ] = useState< ProjectData[] | null >(null);
    const [ cardFlipped, setCardFlipped ] = useState(false);
    const [ face1, setFace1 ] = useState<ProjectData | null>(null);
    const [ face2, setFace2 ] = useState<ProjectData | null>(null);
    const [ buttonActive, setButtonActive ] = useState< string | null>(null);

    const flipCard = (name: string) => {
        const project = projectsData!.find(project => project.name == name);
        
        if (!cardFlipped) {
            if (name == face1!.name) return;
            setFace2(project!);
        } else {
            if (name == face2!.name) return;
            setFace1(project!);
        }
        
        setButtonActive(project!.name);
        setCardFlipped(prevState => !prevState);
        setTimeout(() => {
            cardFlipped ? setFace2(null) : setFace1(null);
        }, 300)
             
    }

    const changeDataType = () => {
        if (documents) {
            let projectData: ProjectData[] = []

            documents.forEach(document => {
                const prismicDoc = document.data as PrismicData;
                const techStack = prismicDoc.tech_stak.map(tech => tech.tech)

                projectData.push({
                    name: prismicDoc.title,
                    image: prismicDoc.thumb.url,
                    liveProjectUrl: prismicDoc.demo,
                    repoprojectUrl: prismicDoc.repo,
                    techStack,
                    description: {
                        "pt-BR": prismicDoc.descriptions[0].portuguese,
                        "en-US": prismicDoc.descriptions[0].english,
                        "es-ES": ""
                    },
                })
            })

            setProjectsData(projectData);
        }
    }

    useEffect(() => {
        changeDataType()
    }, [documents]);

    useEffect(() => {
        if (projectsData) {
            setFace1(projectsData[0]);
        }
    }, [projectsData])

    return (
        <div className={style.projectsContent}>
            <nav className={style.menuProjects}>
                {projectsData && projectsData.map(({name})=>(
                    <button
                        className={buttonActive == name ? style.active : ""}
                        key={name}
                        onClick={() => {flipCard(name)}}
                    >
                        {name}
                    </button>
                ))}
            </nav>
            <div className={cardFlipped ? style.cardProjectFlip : style.cardProject}>
                <FaceCard projectData={face1} />
                <FaceCard projectData={face2} />
            </div>
        </div>
    )
}