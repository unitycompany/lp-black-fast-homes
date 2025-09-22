import React from "react";
import styled from "styled-components";
import FAQ from "../components/partials/FAQ";
import Form from "../components/partials/Form";

const Container = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    gap: 14px;
    padding: 14px 18px;
    background-color: var(--color--white);
    border: 1px solid #00000010;
    border-radius: 22px;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        position: relative;
        gap: 12px;
        padding: 10px 12px;
    }
`

export default function FaqForm() {
    return (
        <>
            <Container>
                <FAQ />
                <Form />    
            </Container>  
        </>
    )
}