import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AiFillHtml5 } from 'react-icons/ai';
import { FaPhp } from 'react-icons/fa';
import { DiCss3, DiBootstrap } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { IoLogoJavascript, IoLogoSass } from 'react-icons/io';

import style from "./style.module.scss";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/pagination";

type SkillsType = "html" | "css" | "javascript" | "sass" | "sql" | "php" | "bootstrap"

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
            courseName: "Web Design",
            courseThumbnailUrl: "https://img-b.udemycdn.com/course/240x135/1616938_8f0b_2.jpg",
            courseDescription: "Neste curso iniciei o aprendizado no desenvolvimento wed, aprendendo aspectos importantes das 3 linguagens básicas do front-end bem como alguns conceitos de SEO e responsividade.",
            courseSkillsLearned: [ "html", "css", "javascript" ],
            courseCertificateUrl: "https://drive.google.com/file/d/1Yg5XFL1_A1bUpIonoTPFp0JjMGNkENle/view?usp=sharing",
            courseRepositorieUrl: "https://github.com/Cleidson-Oliveira/curso-web-design",
            courseIsOver: true,
        },
        {
            courseName: "Desenvolvimento Web",
            courseThumbnailUrl: "https://img-b.udemycdn.com/course/240x135/1341268_c20e_3.jpg",
            courseDescription: "(Em andamento) Neste curso estou aprendendo coisas novas sobre HTML, CSS e JS, além de ter o primeiro contato com SASS, Bootstrap, PHP e SQL.",
            courseSkillsLearned: [ "bootstrap", "sass", "php", "sql" ],
            courseCertificateUrl: "https://drive.google.com/file/d/1cpeEEp2s1RjUxc-DYaP_okREfYegQv6X/view?usp=sharing",
            courseRepositorieUrl: "https://github.com/Cleidson-Oliveira/curso-desenvolvimento-web",
            courseIsOver: false,
        },
        {
            courseName: "Web Design",
            courseThumbnailUrl: "https://img-b.udemycdn.com/course/240x135/1616938_8f0b_2.jpg",
            courseDescription: "Neste curso iniciei o aprendixado no desenvolvimento wed, aprendendo aspectos importantes das 3 línguagens básicas do front-end bem como alguns conceitos de SEO e responsividade.",
            courseSkillsLearned: [ "html", "css", "javascript" ],
            courseCertificateUrl: "https://drive.google.com/file/d/1Yg5XFL1_A1bUpIonoTPFp0JjMGNkENle/view?usp=sharing",
            courseRepositorieUrl: "https://img-b.udemycdn.com/course/240x135/1616938_8f0b_2.jpg",
            courseIsOver: true,
        },
        {
            courseName: "Desenvolvimento Web",
            courseThumbnailUrl: "https://img-b.udemycdn.com/course/240x135/1341268_c20e_3.jpg",
            courseDescription: "(Em andamento) Neste curso estou aprendendo coisas novas sobre HTML, CSS e JS, além de ter o primeiro contato com SASS, Bootstrap, PHP e SQL.",
            courseSkillsLearned: [ "bootstrap", "sass", "php", "sql" ],
            courseCertificateUrl: "https://drive.google.com/file/d/1cpeEEp2s1RjUxc-DYaP_okREfYegQv6X/view?usp=sharing",
            courseRepositorieUrl: "https://img-b.udemycdn.com/course/240x135/1616938_8f0b_2.jpg",
            courseIsOver: false,
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
                                    Repositories
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>   
        </div>
    )
}