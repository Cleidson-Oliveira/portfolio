import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import style from "./style.module.scss";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/pagination";

export const EducationSession = () => {
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
    )
}