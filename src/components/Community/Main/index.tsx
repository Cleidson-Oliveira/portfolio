import { useRef, useState} from "react";
import { FaceCard } from "../FaceCard";

import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import style from "./style.module.scss";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/pagination";
import HomeSession from "../HomeSession";
import { ProjectsSession } from "../ProjectsSession";

export default function Main () {

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
                
                <ProjectsSession />
                
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