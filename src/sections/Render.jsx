import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Airbnb from "./Airbnb";
import Metrics from "./Metrics";
import Portfolio from "./Portfolio";
import Steps from "./Steps";
import FaqForm from "./FaqForm";
import Footer from "./Footer";

const Content = styled.main`
    max-width: 1440px;
    width: 100%;
    padding: 1% 5%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 22px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 768px) {
        padding: 2.5%;
        width: 100%;
        gap: 16px;
    }
`


export default function Render() {
    return (
        <>
            <Content>
                {/* <Header /> */}
                    <Hero />
                        <Metrics />
                            <Portfolio />
                                    <FaqForm />
                                        <Footer />
            </Content>
        </>
    )
}