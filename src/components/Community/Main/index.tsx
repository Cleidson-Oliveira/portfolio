import { useRef, useState} from "react";
import { FaceCard } from "../FaceCard";

import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import style from "./style.module.scss";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/pagination";
import HomeSession from "../HomeSession";

interface ProjectData {
    name: string,
    image: string,
    description: string,
}

export default function Main () {

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
        <main className={style.wrapper}>

            <div className={style.card}>
                <h1 className={style.title}>
                    Home
                </h1>
                <HomeSession />
            </div>

            <div className={style.card}>
                <h1 className={style.title}>
                    Projects
                </h1>
                
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
                
            </div>

            <div className={style.card}>
                <h1 className={style.title}>
                    Courses
                </h1>
                <div className={style.skillAndEducationContent}>
                    <Swiper
                        modules={[A11y, Pagination]}
                        spaceBetween={20}
                        slidesPerView={2.5}
                        pagination={{ type: 'bullets', }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className={style.educationCard}>
                                <img src="https://img-b.udemycdn.com/course/240x135/1616938_8f0b_2.jpg" alt="" />
                                <h2>título do curso</h2>
                                <p>Descrição mais detalhada sobre o curso, sobre o que foi passado e os projetos desenvolvidos...</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={style.educationCard}>
                                <img src="https://img-b.udemycdn.com/course/240x135/1616938_8f0b_2.jpg" alt="" />
                                <h2>título do curso</h2>
                                <p>Descrição mais detalhada sobre o curso, sobre o que foi passado e os projetos desenvolvidos...</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={style.educationCard}>
                                <img src="https://img-b.udemycdn.com/course/240x135/1616938_8f0b_2.jpg" alt="" />
                                <h2>título do curso</h2>
                                <p>Descrição mais detalhada sobre o curso, sobre o que foi passado e os projetos desenvolvidos...</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>   
                </div>
            </div>
            <div className={style.card}>
                <h1 className={style.title}>
                    Contact
                </h1>
            </div>
            <div className={style.card}>
                <h1 className={style.title} id="teste">
                    About me
                </h1>
            </div>
        </main>
    )
}