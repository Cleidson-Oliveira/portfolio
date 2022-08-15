import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AiFillHtml5 } from 'react-icons/ai';
import { FaPhp, FaReact } from 'react-icons/fa';
import { DiCss3, DiBootstrap } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { IoLogoJavascript, IoLogoSass, IoLogoNodejs } from 'react-icons/io';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

import style from "./style.module.scss";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/pagination";

type SkillsType = "html" | "css" | "javascript" | "typescript" | "sass" | "sql" | "php" | "bootstrap" | "react" | "next" | "node" | "reactnative"

interface EducationDataType {
    courseName: string,
    courseThumbnailUrl: string,
    courseDescription: string,
    courseCertificateUrl: string,
    courseRepositorieUrl: string,
    courseIsOver: boolean,
    courseSkillsLearned: SkillsType[],
}

export const EducationSession = () => {

    const EducationData: EducationDataType[] = [
        {
            courseName: "Ignite",
            courseThumbnailUrl: "https://raw.githubusercontent.com/Cleidson-Oliveira/portfolio/main/images/coursesThumbs/ignite.png",
            courseDescription: "Neste treinamento é encontrado o conteúdo mais atualizado e alinhado com o mercado envolvendo desenvolvimento Mobile, Front & Back-end com a stack Javascript e todo o ambiente que rodeia estas tecnologias.",
            courseSkillsLearned: [ "react", "next", "node", "reactnative", "typescript" ],
            courseCertificateUrl: "",
            courseRepositorieUrl: "https://img-b.udemycdn.com/course/240x135/1616938_8f0b_2.jpg",
            courseIsOver: false,
        },
        {
            courseName: "Desenvolvimento Web",
            courseThumbnailUrl: "https://raw.githubusercontent.com/Cleidson-Oliveira/portfolio/main/images/coursesThumbs/desenvolvimento_web.jpg",
            courseDescription: "(Em andamento) Neste curso estou aprendendo coisas novas sobre HTML, CSS e JS, além de ter o primeiro contato com SASS, Bootstrap, PHP e SQL.",
            courseSkillsLearned: [ "bootstrap", "sass", "php", "sql" ],
            courseCertificateUrl: "https://drive.google.com/file/d/1cpeEEp2s1RjUxc-DYaP_okREfYegQv6X/view?usp=sharing",
            courseRepositorieUrl: "https://github.com/Cleidson-Oliveira/curso-desenvolvimento-web",
            courseIsOver: false,
        },     
        {
            courseName: "Web Design",
            courseThumbnailUrl: "https://raw.githubusercontent.com/Cleidson-Oliveira/portfolio/main/images/coursesThumbs/web_design.jpg",
            courseDescription: "Neste curso iniciei o aprendizado no desenvolvimento wed, aprendendo aspectos importantes das 3 linguagens básicas do front-end bem como alguns conceitos de SEO e responsividade.",
            courseSkillsLearned: [ "html", "css", "javascript" ],
            courseCertificateUrl: "https://drive.google.com/file/d/1Yg5XFL1_A1bUpIonoTPFp0JjMGNkENle/view?usp=sharing",
            courseRepositorieUrl: "https://github.com/Cleidson-Oliveira/curso-web-design",
            courseIsOver: true,
        },
    ]

    const skillIcons = {
        "html": () => <AiFillHtml5 />,
        "css": () => <DiCss3 />,
        "javascript": () => <IoLogoJavascript />,
        "sass": () => <IoLogoSass />,
        "sql": () => <GrMysql />,
        "php": () => <FaPhp />,
        "bootstrap": () => <DiBootstrap />,
        "react": () => <FaReact />,
        "next": () => <SiNextdotjs />,
        "node": () => <IoLogoNodejs />,
        "reactnative": () => <TbBrandReactNative />,
        "typescript": () => <SiTypescript />,
    }

    return (
        <div className={style.skillAndEducationContent}>
            <Swiper
                modules={[A11y, Pagination]}
                spaceBetween={20}
                slidesPerView={2.5}
                pagination={{ type: 'bullets', }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {EducationData.map((course, i) => (
                    <SwiperSlide key={course.courseThumbnailUrl + i}>
                        <div className={style.educationCard}>
                            <img src={course.courseThumbnailUrl} alt={course.courseName} />
                            <h2>{course.courseName}</h2>
                            <p>{course.courseDescription}</p>
                            <div className={style.skillLearned}>
                                <p>Skills</p>
                                <div>
                                    {course.courseSkillsLearned.map(skill => (
                                        skillIcons[skill]()
                                    ))}
                                </div>
                            </div>
                            <div className={style.LinksConteiner}>
                                { course.courseIsOver ? (
                                    <a href={course.courseCertificateUrl} className={style.link} target="_blank">
                                        Certificate
                                    </a>
                                ) : (
                                    <span className={style.inactiveLink} >
                                        In progress
                                    </span>
                                )}

                                <a className={style.link} href={course.courseRepositorieUrl} target="_blank">
                                    Repository
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>   
        </div>
    )
}