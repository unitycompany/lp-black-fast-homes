import React from "react";
import styled from "styled-components";
import Title from "../components/texts/Title";
import Description from "../components/texts/Description";
import AirbnbPreviewDesktop from "../layout/Desktop/AirbnbDesktop";
import AirbnbPreviewMobile from "../layout/Mobile/AirbnbMobile";

const Container = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 22px;
    padding: 14px 18px;
    background-color: var(--color--black);
    border-radius: 22px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 10px 12px;
        position: relative;
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

const Preview = styled.div`
    box-shadow: inset 0 0 0 0.2px rgba(0, 0, 0, 1);
    width: 100%;
    height: auto;
    padding: 12px;
    background-color: #fff;
    border-radius: 16px;

    @media (max-width: 768px) {
        padding: 0px;
        box-shadow: 0 0 0 0.2px rgba(0, 0, 0, 1);
    }
`

const MobileOnly = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`

const DesktopOnly = styled.div`
    display: block;

    @media (max-width: 768px) {
        display: none;
    }
`

export default function Airbnb() {
    return (
        <>
            <Container id="airbnbSection">
                <Texts>
                    <Title 
                        children={`Domine o <b>Airbnb</b> e ofereça "experiências únicas"`}
                        colorAdjust="var(--color--airbnb)"
                        textColor="var(--color--white)"
                    />
                    <Description 
                        children={"Esteja onde <b>seus futuros hóspedes</b> já estão <b>procurando</b>"}
                        colorAdjust={"var(--color--black-light)"}
                        textColor="var(--color--white)"
                    />
                </Texts>
                <Preview>
                    <MobileOnly>
                        <AirbnbPreviewMobile />
                    </MobileOnly>
                    <DesktopOnly>
                        <AirbnbPreviewDesktop />
                    </DesktopOnly>
                </Preview>
            </Container>
        </>
    )
}