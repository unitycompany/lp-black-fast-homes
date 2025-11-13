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
    background-color: var(--color--black);
    border: 1px solid #ffffff10;
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
                        imageUrl="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/94049068-fdfa-4ff8-cd77-c4059079c200/public"
                        nameHouse="Chalé Aroeira"
                        typeHouse="Padrão"
                        areaTotal="24,00"
                        larguraXFundo="3,30 x 7,35"
                        loteMinimo="6 x 15"
                        pavimentos="01"
                        quartos="01"
                        suites="-"
                        banheiros="01"
                        garagem="-"
                        gourmet="-"
                        price={11121.35}
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
                        price={15795.76}
                    />
                    <House 
                        imageUrl="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/59fbe6f7-055a-4dc7-9419-75fcbc831100/public"
                        nameHouse="Chalé Oiti"
                        typeHouse="Padrão"
                        areaTotal="33,00"
                        larguraXFundo="8,00 x 3,75"
                        loteMinimo="12 x 15"
                        pavimentos="01"
                        quartos="01"
                        suites="-"
                        banheiros="01"
                        garagem="-"
                        gourmet="-"
                        price={23558.86}
                    />
                    <House 
                        imageUrl="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/250bcb65-b6e1-4e69-ae25-684e90957b00/public"
                        nameHouse="Chalé Araucária"
                        typeHouse="A-frame"
                        areaTotal="85,47"
                        larguraXFundo="7,60 x 9,52"
                        loteMinimo="12 x 30"
                        pavimentos="02"
                        quartos="01"
                        banheiros="01"
                        cozinha="Cozinha independente"
                        price={37361.57}
                    />
                </Houses>
            </Container>
        </>
    )
}