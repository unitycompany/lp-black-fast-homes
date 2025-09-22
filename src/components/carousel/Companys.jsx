import React from "react";
import styled from "styled-components";

import Airbnb from '../../assets/logotipo/logotipo-airbnb-reference-fasthomes.svg';
import Booking from '../../assets/logotipo/logotipo-booking-reference-fasthomes.svg';
import Decolar from '../../assets/logotipo/logotipo-decolar-reference-fasthomes.svg';
import Hotels from '../../assets/logotipo/logotipo-hotels-reference-fasthomes.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';

const companys = [
    { name: "Airbnb", img: Airbnb },
    { name: "Booking", img: Booking },
    { name: "Decolar", img: Decolar },
    { name: "Hotels", img: Hotels },
    { name: "Airbnb", img: Airbnb },
    { name: "Booking", img: Booking },
    { name: "Decolar", img: Decolar },
    { name: "Hotels", img: Hotels },
]

const Carousel = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    &::before {
        content: '';
        width: 150px;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        background: linear-gradient(90deg, #fff 10%, #ffffff00 80%);
        z-index: 2;
    }

    &::after {
        content: '';
        width: 150px;
        height: 100%;
        right: 0;
        top: 0;
        position: absolute;
        background: linear-gradient(-90deg, #fff 10%, #ffffff00 80%);
        z-index: 2;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        max-width: 160px;
        width: 100%;
        height: 50px;
        object-fit: contain;
        display: block;
        padding: 0.5rem;
    }
`

export default function Companys() {
    return (
        <>
            <Carousel>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={8}
                    freeMode={true}
                    freeModeMomentum={false}
                    loop={true}
                    modules={[FreeMode, Autoplay]}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                    speed={2000}
                    breakpoints={{
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 }
                    }}
                    style={{ width: '100%' }}
                >
                    {companys.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item.img} alt={item.name} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Carousel>
        </>
    )
}