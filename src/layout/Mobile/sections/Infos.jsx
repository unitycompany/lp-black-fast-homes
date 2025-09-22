import React from "react";
import styled from "styled-components";

import AchivementAirbnbLeft from '../../../assets/others/airbnb-premius.png';
import AchivementAirbnbRight from '../../../assets/others/airbnb-premius-right.png';
import { MdStarRate } from "react-icons/md";

const Content = styled.ol`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px;
    width: 100%;
    gap: 16px;

    & li:nth-child(2), li:nth-child(4){
        width: 1px;
        height: 40px;
        background-color: var(--color--black-light);
    }

    & li:nth-child(1){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;

        & span {
            font-size: 22px;
        }

        & div {
            display: flex;
            align-items: center;
            justify-content: center;

            & svg {
                width: 10px;
            }
        }
    }

    & li:nth-child(3){
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
        width: 100%;

        & p {
            font-size: 14px;
        }

        & img {
            position: absolute;
            z-index: -1;
            width: 25px;
        }

        & .image_left {
            left: -5px;
            top: 60%;
            transform: translateY(-50%);
        }

        & .image_right {
            right: -5px;  
            top: 60%;
            transform: translateY(-50%);
        }
    }

    & li:nth-child(5){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;

        & span {
            font-size: 22px;
            font-weight: 400;
        }

        & p {
            font-size: 14px;
            font-weight: 300;
            color: var(--color--black);
        }
    }
`

export default function AirbnbInfos() {
    return (
        <>
            <Content data-aos="fade-up">
                <li>
                    <span>4,98</span>
                    <div>
                        <MdStarRate />
                        <MdStarRate />
                        <MdStarRate />
                        <MdStarRate />
                        <MdStarRate />
                    </div>
                </li>
                <li></li>
                <li>
                    <img src={AchivementAirbnbRight} alt="" className="image_left" data-aos="zoom-in" data-aos-delay="400"/>
                    <p>Preferido<br/> dos hóspedes</p>
                    <img src={AchivementAirbnbLeft} alt="" className="image_right" data-aos="zoom-in" data-aos-delay="400"/>
                </li>
                <li></li>
                <li>
                    <span>183</span>
                    <p>avaliações</p>
                </li>
            </Content>
        </>
    )
}