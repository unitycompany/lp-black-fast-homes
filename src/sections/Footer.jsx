import React from "react";
import styled from "styled-components";

import alephwebdev from "../assets/logotipo/icon-black-aleph-desenvolvedor-web.svg";
import AlephsramosdevWidget from "../components/AlephsramosdevWidget";

const Container = styled.footer`
    width: 100%;
    padding: 18px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 22px;
    background: var(--color--black);

    @media (max-width: 768px){
        flex-direction: column;
        align-item: center;
        justify-content: center;
        text-align: center;
        gap: 20px;
    }

    & > p {
        font-size: 16px;
        font-weight: 300;
        color: var(--color--white);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
`

export default function Footer () {
    return (
        <>
            <Container>
                <p>Todos os direitos reservados | CNPJ: 40.436.034/0001-48 | Fast Homes</p>
                <AlephsramosdevWidget />
            </Container>
        </>
    )
}