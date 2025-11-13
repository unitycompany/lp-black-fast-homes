import React, { useState } from "react";
import styled from "styled-components";
import Title from "../texts/Title";
import Button from "../buttons/Button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px;
    border-radius: 22px;
    background-color: var(--color--background-black);
    height: 280px;
    gap: 12px;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
        height: auto;
    }
`

const Image = styled.div`
    height: 100%;
    border-radius: 16px;
    flex: 1;

    @media (max-width: 768px){
        width: 100%;
    }

    & img {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        object-fit: cover;
        object-position: center;

        @media (max-width: 768px){
            height: 240px;
        }
    }
`

const Name = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    flex: 1;
    padding: 26px 12px;

    & button {
        width: 100%;
    }

    @media (max-width: 768px){
        width: 100%;
        align-items: flex-start;
        gap: 18px;
        padding: 8px 16px;
    }

    & aside {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 2px;

        & span {
            font-size: 14px;
            color: var(--color--white);
            font-weight: 300;
            opacity: 0.6;

            @media (max-width: 768px){
                font-size: 14px;
            }
        }
    }
`

const VerMais = styled.button`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    border: none;
    font-size: 16px;
    border-radius: 16px;
    background-color: var(--color--white);
    display: none;

    @media (max-width: 768px){
        display: flex;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    flex: 1;
    gap: 18px;
    padding: 12px;
    border-radius: 18px;
    background: var(--color--white);

    @media (max-width: 768px){
        width: 100%;
        height: auto;
        transform-origin: top;
        transition: transform 580ms ease, opacity 540ms ease, max-height 800ms ease, margin 540ms ease, padding 700ms ease;
        will-change: transform, opacity, max-height;

        &.collapsed {
            transform: translateY(-6px) scaleY(0.98);
            opacity: 0;
            max-height: 0;
            margin: 0;
            padding-top: 0;
            padding-bottom: 0;
            overflow: hidden;
            pointer-events: none;
            margin-top: -10px;
        }

        &.expanded {
            transform: translateY(0) scaleY(1);
            opacity: 1;
            max-height: 1200px; /* large enough to contain content */
            padding: 12px;
            pointer-events: auto;
        }
    }

    & aside {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 4px;

        & span {
            font-size: 12px;
            color: var(--color--gray);
        }

        & h4 {
            font-size: 22px;
            font-weight: 500;
            color: var(--color--black);
        }
    }

    & ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 8px;

        & li {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 6px 0;
            border-bottom: 1px solid #00000010;

            &:last-child {
                border-bottom: none;
            }

            & .cozinha {
                font-size: 16px;
                color: var(--color--black-light);
            }

            & p {
                font-size: 14px;
                color: var(--color--black-light);
            }

            & span {
                font-weight: 500;
                color: var(--color--black);
            }
        }
    }
`

const Price = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 2px;
    margin-top: 8px;

    & h2 {
        font-size: 16px;
        color: var(--color--white-light);
        line-height: 100%;

        & strong {
            font-weight: 400;
            text-decoration: line-through;
        }   
    }

    & > p {
        font-size: 16px;
        font-weight: 400;
        line-height: 100%;
        color: var(--color--white-light);

        & strong {
            font-weight: 600;
            font-size: 20px;
            color: var(--color--green);
        }
    }
`

export default function House({
    imageUrl,
    nameHouse,
    typeHouse,
    areaTotal,
    larguraXFundo,
    loteMinimo,
    pavimentos,
    quartos,
    banheiros,
    cozinha = 'Cozinha integrada ao ambiente',
    price = 120000
}) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => setExpanded(prev => !prev);
    return (
        <>
            <Content>
                <Image data-aos="zoom-in">
                    <img src={imageUrl} alt={nameHouse}/>
                </Image>
                <Name data-aos="fade-up">
                    <aside>
                        <span>Modelo {typeHouse}</span>
                        <Title 
                            children={nameHouse}
                            fontSize="28px"
                            textColor="var(--color--white)"
                            fontSizeMobile="32px"
                        />
                        <Price>
                            <h2>De <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price * 1.3)}</strong></h2>
                            <p>A partir de <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</strong></p>
                        </Price>
                    </aside>
                    <Button 
                        color="var(--color--white)"
                        textColor="var(--color--black)"
                        colorBorder="var(--color--white)"
                        onClick={() => {
                                const el = document.getElementById('contactForm');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                    />
                </Name>
                <VerMais
                    onClick={toggleExpanded}
                    aria-expanded={expanded}
                    aria-controls={`house-info-${nameHouse}`}
                    title={expanded ? "Esconder informações" : "Ver informações"}
                >
                    {expanded ? 'Minimizar informações' : 'Ver informações'}
                    {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </VerMais>
                <Info
                    id={`house-info-${nameHouse}`}
                    className={expanded ? 'expanded' : 'collapsed'}
                >
                    <aside data-aos="zoom-in">
                        <span>Fast Homes - {nameHouse}</span>
                        <h4>Informações Técnicas</h4>
                    </aside>
                    <ul>
                        <li data-aos="fade-up">
                            <p>Área Total</p>
                            <span>{areaTotal}m²</span>
                        </li>
                        <li data-aos="fade-up">
                            <p>Largura x Fundo</p>
                            <span>{larguraXFundo}m</span>
                        </li>
                        <li data-aos="fade-up">
                            <p>Lote mínimo</p>
                            <span>{loteMinimo}m</span>
                        </li>
                        <li data-aos="fade-up">
                            <p>Pavimentos</p>
                            <span>{pavimentos}</span>
                        </li>
                    </ul>
                </Info>
                <Info className={expanded ? 'expanded' : 'collapsed'}>
                    <aside data-aos="zoom-in">
                        <span>Fast Homes - {nameHouse}</span>
                        <h4>Informações Internas</h4>
                    </aside>
                    <ul>
                        <li data-aos="fade-up">
                            <p>Quartos</p>
                            <span>{quartos}</span>
                        </li>
                        <li data-aos="fade-up">
                            <p>Banheiros</p>
                            <span>{banheiros}</span>
                        </li>
                        <li data-aos="fade-up">
                            <p className="cozinha">{cozinha}</p>
                        </li>
                    </ul>
                </Info>
            </Content>
        </>
    )
}