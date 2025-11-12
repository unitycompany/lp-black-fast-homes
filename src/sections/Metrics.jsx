import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Title from "../components/texts/Title";
import Chart from "../components/others/Grafic";
import Description from "../components/texts/Description";
import Button from "../components/buttons/Button";

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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 22px;
    width: 50%;
    padding: 12px;

    @media (max-width: 768px){
        width: 100%;
    }
`

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 42px;
    background: var(--color--background-black);
    padding: 16px;
    border-radius: 16px;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 12px;
        gap: 18px;
    }
`


const Grafic = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 28px;
    padding: 18px;
    border-radius: 16px;
    background: linear-gradient(-90deg, var(--color--background-black) 0%, #000000 100%);

    @media (max-width: 768px){
        width: 100%;
        padding: 14px;
        background: linear-gradient(0deg, var(--color--background-black) 0%, #000000 100%);
    }
`

const Infos = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 22px;

    @media (max-width: 768px){
        width: 100%;
    }
`

export default function Metrics() {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = containerRef.current;
        if (!node) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // we only need to trigger once
                        obs.unobserve(node);
                    }
                });
            },
            { threshold: 0.2 }
        );

        obs.observe(node);

        return () => obs.disconnect();
    }, []);

    return (
        <>
            <Container ref={containerRef}>
                <Texts>
                    <Title 
                        children={`Você já viveu isso: <b>344% de crescimento</b> não surge do nada`}
                        colorAdjust={"var(--color--green)"}
                    />
                </Texts>
                <Content>
                    <Grafic>
                        <Title 
                            children={`Métricas do crescimento pela <b>busca de chalés <i>(unique stays)</i></b> na escolha da hospedagem`}
                            colorAdjust="var(--color--white-light)"
                            textColor="var(--color--white)"
                            fontSize="22px"
                            fontSizeMobile="20px"
                        />
                        {isVisible ? (
                            <Chart />
                        ) : (
                            // placeholder keeps layout so nothing jumps before animation
                            <div style={{ width: '100%', height: 320 }} />
                        )}
                    </Grafic>
                    <Infos>
                        <Title 
                            children={`Quem entrou cedo está <b>faturando alto</b>. Quem ainda está <b>"pensando"</b>... bem, continua pensando.`}
                            colorAdjust="var(--color--green)"
                            fontSize="28px"
                            fontSizeMobile="24px"
                        />
                        <Description 
                            children={`<b>Diversas pesquisam apontam</b> o crescimento e a busca por cháles!`}
                            colorAdjust="var(--color--white-light)"
                        />
                        <Button 
                            color="var(--color--white)"
                            textColor="var(--color--black)"
                            colorBorder="var(--color--white)"
                            onClick={() => {
                                const el = document.getElementById('contactForm');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                        />
                    </Infos>
                </Content>
            </Container>
        </>
    )
}