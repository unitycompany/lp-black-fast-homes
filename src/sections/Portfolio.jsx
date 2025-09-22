import React from "react";
import styled from "styled-components"; 
import Title from "../components/texts/Title";
import Description from "../components/texts/Description";
import House from "../components/cards/House";

const Container = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 26px;
    padding: 14px 18px;
    background-color: var(--color--white);
    border: 1px solid #00000010;
    border-radius: 22px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 10px 12px;
        flex-direction: column;
        position: relative;
        gap: 18px;
        padding: 10px 12px;
    }
`

const Texts = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 8px 12px;
    gap: 12px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`

const Houses = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    height: auto;
    border-radius: 18px;
`

export default function Portfolio() {
    return (
        <>
            <Container>
                <Texts>
                    <Title 
                        children={`Dois projetos estratégicos para <b>diferentes segmentos</b>`}
                        colorAdjust="var(--color--green)"
                    />
                    <Description 
                        children={"<b>Em breve teremos mais modelos disponíveis e lembre-se</b>, você pode ter um personalizado"}
                        colorAdjust={"var(--color--green)"}
                    />
                </Texts>
                <Houses>
                    <House 
                        imageUrl="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/250bcb65-b6e1-4e69-ae25-684e90957b00/public"
                        nameHouse="Chalé Araucária"
                        typeHouse="A-frame"
                        areaTotal="85,47"
                        larguraXFundo="7,60 x 9,52"
                        loteMinimo="12 x 30"
                        pavimentos="02"
                        quartos="01"
                        suites="-"
                        banheiros="01"
                        garagem="-"
                        gourmet="-"
                    />
                    <House 
                        imageUrl="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c2c98643-0a28-49ca-4b53-e004013ce100/public"
                        nameHouse="Chalé Buriti"
                        typeHouse="Padrão"
                        areaTotal="23,00"
                        larguraXFundo="3,20 x 7,50"
                        loteMinimo="10 x 20"
                        pavimentos="01"
                        quartos="01"
                        suites="-"
                        banheiros="01"
                        garagem="-"
                        gourmet="-"
                    />
                </Houses>
            </Container>
        </>
    )
}