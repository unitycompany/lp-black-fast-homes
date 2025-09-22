import React from "react";
import styled from "styled-components";
import Button from "../components/buttons/Button";

const Container = styled.header`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 18px;
    background-color: var(--color--black);
    border-radius: 16px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 10px 12px;
    }

    & picture {
        width: max-content;
        height: auto;

        & img {
            width: 240px;
            filter: invert(100%) brightness(400%);

            @media (max-width: 768px) {
                width: 40px;
            }
        }
    }
`

export default function Header() {
    return (
        <>
            <Container>
                <picture>
                    <source srcSet="/src/assets/logotipo/fasthomes-icon-black-version.png" media="(max-width: 768px)" />
                    <img src="/src/assets/logotipo/fasthomes-logo-black-version.png" alt="logo-fast-homes-black-version" />
                </picture>
                <Button 
                    buttonText="Falar com um consultor"
                    color="var(--color--green)"
                    textColor="var(--color--white)"
                />
            </Container>
        </>
    )
}