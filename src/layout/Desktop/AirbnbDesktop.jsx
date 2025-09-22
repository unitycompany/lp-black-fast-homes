import React from "react";
import styled from "styled-components";
import AirbnbHeader from "./sections/Header";
import AirbnbGalery from "./sections/Galery";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: auto;
    width: 100%;
`

export default function AirbnbPreviewDesktop() {
    return (   
        <>  
            <Container>
                <AirbnbHeader />
                <AirbnbGalery />
            </Container>
        </>
    )
}