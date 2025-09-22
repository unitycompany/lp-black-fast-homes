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
    background-color: var(--color--white);
    border: 1px solid #00000010;
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
    gap: 26px;
    width: 50%;

    @media (max-width: 768px){
        width: 100%;
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
    min-height: 500px;
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
        min-height: 500px;
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
                    <Badge 
                        assessmentValue="4.9"
                    />
                    <Title 
                        children={"Por que aguardar <b>18 meses</b> quando é possível iniciar sua operação em <b>4?</b>"}
                        fontSize="46px"
                        fontSizeMobile="28px"
                        colorAdjust="var(--color--green)"
                    />
                    <Description 
                        children="Chalés Fast Homes: orçamento <b>definido</b>, arquitetura <b>acolhedora</b>, estrutura <b>certificada</b>"
                        fontSize="22px"
                        fontSizeMobile="18px"
                        colorAdjust="var(--color--black-light)"
                    />
                    <Buttons>
                        <Button
                            buttonText="Falar com um consultor"
                            color="var(--color--green)"
                            textColor="var(--color--white)"
                            onClick={() => {
                                const el = document.getElementById('contactForm');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                        />
                        <Button
                            buttonText="Saber mais"
                            color="transparent"
                            colorBorder="var(--color--black-light)"
                            textColor="var(--color--black-light)"
                            fontWeight="400"
                            onClick={() => {
                                const el = document.getElementById('airbnbSection');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                        />
                    </Buttons>
                    <Carousel data-aos="fade-in">
                        <p>Venda nessas plataformas</p>
                        <Companys />
                    </Carousel>
                </Texts>
                <Image data-aos="zoom-in">
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/795a497e-4268-40dc-d493-39b6ced14900/public" alt="" />
                </Image>
            </Container>
        </>
    )
}