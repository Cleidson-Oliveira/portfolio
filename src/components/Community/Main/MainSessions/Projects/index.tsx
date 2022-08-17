import { useRef, useState } from "react";
import { FaceCard } from "../../../FaceCard";

import style from "./style.module.scss";

interface ProjectData {
    name: string,
    image: string,
    description: string,
    liveProjectUrl: string,
    repoprojectUrl: string,
    techStack: string[],
}

export const ProjectsSession = () => {

    const projectsData = [
        {
            name: "Ângela Reys Fotografia",
            image: "https://raw.githubusercontent.com/Cleidson-Oliveira/portfolio/main/images/projectThumbs/angelareysfotografia.png",
            description: "Este projeto é um website que apresenta o trabalho de uma fotografa. Uma restAPI expõe a localização das fotos apresentadas na galeria. Na página de contato é possível enviar um e-mail para a fotografa.",
            liveProjectUrl: "https://angela-reys-fotografia.vercel.app/",
            repoprojectUrl: "https://github.com/Cleidson-Oliveira/Angela-Reys-Fotografia",
            techStack: ["NextJs", "Styled-components", "Mongodb", "Vercel"],
        },
        {
            name: "5Ws",
            image: "https://raw.githubusercontent.com/Cleidson-Oliveira/portfolio/main/images/projectThumbs/5Ws.jpg",
            description: "Através desta aplicação o usuário pode descrever imagens do cotidiano aplicando o método 5Ws para melhorar o vocabulário em outro idioma.",
            liveProjectUrl: "https://5-ws.vercel.app/",
            repoprojectUrl: "https://github.com/Cleidson-Oliveira/5Ws",
            techStack: ["NextJs", "Styled-components", "FaunaDb", "Vercel"],
        },
        {
            name: "Yu-Gi-Tools",
            image: "https://raw.githubusercontent.com/Cleidson-Oliveira/portfolio/main/images/projectThumbs/yu-gi-tools.png",
            description: "Esta aplicação tem por intuito agregar ferramentas úteis para jogadores do cardgame Yu-Gi-Oh!. Além de acessar os cards e verificar suas características, é possível calcular as probabilidades envolvidas no deck build.",
            liveProjectUrl: "https://yu-gi-tools.herokuapp.com/",
            repoprojectUrl: "https://github.com/Cleidson-Oliveira/YuGiTools",
            techStack: ["React", "Heroku"],
        },
        {
            name: "Pokebag",
            image: "https://raw.githubusercontent.com/Cleidson-Oliveira/portfolio/main/images/projectThumbs/pokebag.png",
            description: "Este foi um dos primeiros projetos que criei para treino. É um utilitário de pokémon que acessa a pokeAPI para pegar informações dos pokémons. Além disso, simula batalhas usando estes dados e favorita equipes de pokémons.",
            liveProjectUrl: "",
            repoprojectUrl: "https://github.com/Cleidson-Oliveira/Pokebag",
            techStack: ["HTML", "CSS", "Javascript"],
        },
        {
            name: "Em breve",
            image: "https://raw.githubusercontent.com/Cleidson-Oliveira/portfolio/main/images/projectThumbs/angelareysfotografia.png",
            description: "Text about this project, text about this project, text about this project, text about this project, text about this project, text about this project",
            liveProjectUrl: "",
            repoprojectUrl: "",
            techStack: ["Em breve"],
        },
    ]

    const [flip, setFlip] = useState(false)
    const [firstFaceCard, setFirstFaceCard] = useState<ProjectData>(projectsData[0])
    const [secondFaceCard, setSecondFaceCard] = useState<ProjectData>(projectsData[1])
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
        handleButtonActive(name);
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