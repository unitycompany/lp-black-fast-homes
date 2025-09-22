import React from "react";
import styled from "styled-components";

const Content = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: auto;
    background: var(--color--black);
    border: 2px solid var(--color--green);
    border-radius: 22px;
    padding: 22px 18px;
    gap: 18px;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2px;

    & span {
        font-size: 14px;
        color: var(--color--white);
        opacity: 0.6;
    }

    & h4 {
        font-size: 22px;
        font-weight: 500;
        color: var(--color--white);
    }
`

const Image = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 16px;

    & img {
        width: 100%;
        height: 240px;
        object-fit: cover;
        object-position: center;
        position: relative;
        border-radius: 16px;
    }
`

const Badge = styled.div`
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #ffffff30;
    font-size: 14px;
    color: var(--color--white);
    position: relative;
    z-index: 2;
`

export default function Step({
    stepNumber,
    stepTitle,
    stepImage,
    motivation
}) {
    return (
        <>
            <Content>
                <Badge>{motivation}</Badge>
                <Text>
                    <span>Etapa {stepNumber}</span>
                    <h4>{stepTitle}</h4>
                </Text>
                <Image>
                    <img src={stepImage} alt={stepTitle} />
                </Image>
            </Content>
        </>
    )
}