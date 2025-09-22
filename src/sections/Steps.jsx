import React, { useRef } from "react";
import styled from "styled-components";
import Title from "../components/texts/Title";
import Description from "../components/texts/Description";
import Step from "../components/cards/Step";

import Step01 from '../assets/steps/escolha-de-casas-da-fasthomes.png';
import Step02 from '../assets/steps/planejamento-colaborativo-da-fasthomes.png';
import Step03 from '../assets/steps/execucao-transparente-da-fasthomes.png';
import PrevNext from "../components/buttons/PrevNext";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Container = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 22px;
    border-radius: 16px;

    @media (max-width: 768px) {
        width: 100%;
        gap: 28px;
        position: relative;
    }
`

const Texts = styled.div`
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 8px 12px;
    gap: 22px;
    text-align: center;

    @media (max-width: 768px){
        width: 100%;
    }

    & p {
        width: 95%;

        @media (max-width: 768px){
            width: 100%;    
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`

const Carousel = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    position: relative;
    gap: 8px;
`

export default function Steps() {

    const swiperRef = useRef(null);

    const handleNext = () => {
        try {
            if (window && window.innerWidth <= 768) {
                swiperRef.current && swiperRef.current.slideNext && swiperRef.current.slideNext();
            }
        } catch (e) {}
    }

    const handlePrev = () => {
        try {
            if (window && window.innerWidth <= 768) {
                swiperRef.current && swiperRef.current.slidePrev && swiperRef.current.slidePrev();
            }
        } catch (e) {}
    }
    return (
        <>
            <Container>
                 <Texts>
                    <Title 
                        children={`Por que <b>complicar</b> se pode ser <b>simples?</b>`}
                        colorAdjust="var(--color--green)"
                    />
                    <Description 
                        children={"Transformar sua visão de <b>investimento</b> em <b>operação lucrativa</b> deveria ser simples. Por isso <b>eliminamos</b> as complexidades típicas da <b>construção tradicional</b>"}
                        colorAdjust={"var(--color--black-light)"}
                    />
                </Texts>
                <Carousel>
                    {/* Swiper with responsive slidesPerView: 3 on desktop, 1 on mobile */}
                    <Swiper
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                        slidesPerView={1}
                        spaceBetween={8}
                        loop={true}
                        className="mySwiper"
                        breakpoints={{
                            480: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            1024: { slidesPerView: 3 }
                        }}
                        style={{ width: '100%' }}
                    >
                        <SwiperSlide>
                            <Step 
                                stepNumber="01"
                                stepTitle="Escolha a sua Home"
                                stepImage={Step01}
                                motivation="Muito rápido!"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Step 
                                stepNumber="02"
                                stepTitle="Planejamento colaborativo"
                                stepImage={Step02}
                                motivation="A gente consegue!"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Step 
                                stepNumber="03"
                                stepTitle="Execução transparente"
                                stepImage={Step03}
                                motivation="4x mais rápido!"
                            />
                        </SwiperSlide>
                    </Swiper>

                    {/* Prev/Next buttons: on mobile they control Swiper; on desktop they are visual indicators only */}
                    <PrevNext
                        Direction={false}
                        left="31%"
                        leftMobile="70%"
                        topMobile="0%"
                        top="50%"
                        onClick={handlePrev}
                    />
                    <PrevNext
                        Direction={true}
                        leftMobile="85%"
                        topMobile="0%"
                        left="65%"
                        top="50%"
                        onClick={handleNext}
                    />
                </Carousel>
            </Container>
        </>
    )
}