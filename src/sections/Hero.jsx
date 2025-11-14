import React from "react";
import styled from "styled-components";
import Badge from "../components/others/Badge";
import Title from "../components/texts/Title";
import Description from "../components/texts/Description";
import Button from "../components/buttons/Button";
import Companys from "../components/carousel/Companys";

const Container = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 26px;
    padding: 14px 18px;
    background-color: var(--color--black);
    border: 1px solid #ffffff10;
    border-radius: 22px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 10px 12px;
        flex-direction: column-reverse;
        position: relative;
        padding: 10px 12px;
    }
`

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;
    width: 50%;

    & img {
        width: 320px;

        @media (max-width: 768px){
            width: 260px;
        }
    }

    @media (max-width: 768px){
        width: 100%;
        gap: 16px;
    }
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
`

const Carousel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 12px;
    margin-top: 8px;

    & p {
        font-size: 16px;
        font-weight: 500;
        color: var(--color--gray);

        @media (max-width: 768px){
            font-size: 14px;
        }
    }
`

const Image = styled.div`
    width: 50%;
    height: 100%;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    position: relative;

    @media (max-width: 768px){
        width: 100%;
        min-height: 350px;
    }

    & img {
        width: 100%;
        height: 100%;
        min-height: 480px;
        object-fit: cover;
        border-radius: 16px;

        @media (max-width: 768px){
            min-height: 350px;
        }
    }
`

export default function Hero() {
    return (
        <>
            <Container>
                <Texts>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/91e0da1a-221b-49f8-5354-4dd0a8fc8f00/public" alt="" />
                    <Title 
                        children={"<span>Apenas 5 estruturas</span> de cada modelo. Sem segunda chance."}
                        fontSize="36px"
                        fontSizeMobile="28px"
                        colorAdjust="var(--color--green)"
                    />
                    <Description 
                        children="Você sabe quanto custa uma estrutura certificada em steel frame com arquitetura validada? Então já sabe que na Fast Homes o desconto é de verdade. <b>São apenas 5 unidades de cada modelo</b> a um preço que você nunca mais vai encontrar."
                        fontSize="20px"
                        fontSizeMobile="18px"
                        colorAdjust="var(--color--white-light)"
                    />
                    <Description 
                        children="Enquanto você fica pensando, já tem gente FATURANDO."
                        fontSize="20px"
                        fontSizeMobile="18px"
                        colorAdjust="var(--color--white-light)"
                    />
                    <Buttons>
                        <Button
                            buttonText="Garantir minha condição agora"
                            color="var(--color--white)"
                            textColor="var(--color--black)"
                            colorBorder="var(--color--white)"
                            onClick={() => {
                                const el = document.getElementById('contactForm');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                        />
                    </Buttons>
                </Texts>
                <Image data-aos="zoom-in">
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a1badce6-e01b-47da-2643-633949149f00/public" alt="" />
                </Image>
            </Container>
        </>
    )
}