import { useContext, useEffect, useState } from 'react';

import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';

import EducationData from "./DataEducation/index.json";

import { AiFillHtml5 } from 'react-icons/ai';
import { FaPhp, FaReact } from 'react-icons/fa';
import { DiCss3, DiBootstrap } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { IoLogoJavascript, IoLogoSass, IoLogoNodejs } from 'react-icons/io';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/pagination";

import style from "./style.module.scss";
import { LanguageContext } from '../../../../contexts/Language/LanguagesContext';

type SkillsType = "html" | "css" | "javascript" | "typescript" | "sass" | "sql" | "php" | "bootstrap" | "react" | "next" | "node" | "reactnative"

export const EducationSession = () => {

    const [slidesPerView, setSlidesPerView] = useState(2.5);

    const { lang } = useContext(LanguageContext);

    const smallScreen = useMediaQuery({ query: '(max-width: 599px)' });
    const mobileScreen = useMediaQuery({ query: '(min-width: 600px) and (max-width: 767px)' });
    const tabletScreen = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' });
    const laptopScreen = useMediaQuery({ query: '(min-width: 992px) and (max-width: 1200px)' });
    const largeScreen = useMediaQuery({ query: '(min-width: 1201px)' });

    useEffect(() => {
        if (smallScreen) {
            setSlidesPerView(1)
        }
        if (mobileScreen) {
            setSlidesPerView(1.3)
        }
        if (tabletScreen) {
            setSlidesPerView(1.6)
        }
        if (laptopScreen) {
            setSlidesPerView(1.9)
        }
        if (largeScreen) {
            setSlidesPerView(2.3)
        }
    }, [
        smallScreen,
        mobileScreen,
        tabletScreen,
        laptopScreen,
        largeScreen,
    ])

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
                slidesPerView={slidesPerView}
                pagination={{ type: 'bullets' }}
            >
                {EducationData.map((course, i) => (
                    <SwiperSlide key={course.courseThumbnailUrl + i}>
                        <div className={style.educationCard}>
                            <img src={course.courseThumbnailUrl} alt={course.courseName} />
                            <h2>{course.courseName}</h2>
                            <p>{course.courseDescription[lang]}</p>
                            <div className={style.skillLearned}>
                                <p>{lang === "en-US" ? "Skills" : "Habilidades"}</p>
                                <div>
                                    {course.courseSkillsLearned.map((skill) => (
                                        <div key={skill}>{ skillIcons[skill as SkillsType]() }</div>
                                    ))}
                                </div>
                            </div>
                            <div className={style.LinksConteiner}>
                                { course.courseIsOver ? (
                                    <a href={course.courseCertificateUrl} className={style.link} target="_blank">
                                        {lang === "en-US" ? "Certificate" : "Certificado"}
                                    </a>
                                ) : (
                                    <span className={style.inactiveLink} >
                                        {lang === "en-US" ? "In progress" : "Em evolução"}
                                    </span>
                                )}

                                <a className={style.link} href={course.courseRepositorieUrl} target="_blank">
                                    {lang === "en-US" ? "Repository" : "Repositório"}
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>   
        </div>
    )
}