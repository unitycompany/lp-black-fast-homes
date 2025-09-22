import React from "react";
import styled from "styled-components";
import IconBtn from "../../components/buttons/IconBtn";
import Title from "../../components/texts/Title";
import Description from "../../components/texts/Description";
import AirbnbInfos from "./sections/Infos";
import { IoDiamondOutline } from "react-icons/io5";
import Button from "../../components/buttons/Button";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    height: 600px;
    width: 100%;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
`

const Bg = styled.div`
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/250bcb65-b6e1-4e69-ae25-684e90957b00/public');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 55%;
    position: absolute;
    z-index: 0;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    z-index: 1;
    padding: 20px;

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
`

const Main = styled.div`
    width: 100%;
    height: auto;
    background-color: var(--color--white);
    border-radius: 26px 26px 16px 16px;
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    position: relative;
    z-index: 1;
`

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    gap: 8px;
`

const Range = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 0;
    background-color: var(--color--background-white);

    & p {
        font-size: 12px;
        white-space: nowrap;
    }

    & svg {
        width: 14px;
    }
`

const Price = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    margin-top: -6px;

    & div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 4px;

        & span {
            font-size: 18px;
            text-decoration: underline;
        }

        & p {
            font-size: 14px;
            font-weight: 300;
            color: var(--color--black-light);
        }
    }
`

export default function AirbnbPreviewMobile() {
    return (   
        <>  
            <Container onClick={() => {
                const el = document.getElementById('contactForm');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                <Bg></Bg>
                <Menu>
                    <IconBtn 
                        icon="ArrowLeft"
                        size="38px"
                        bgColor={"var(--color--white)"}
                    />
                    <div>
                        <IconBtn 
                            icon="Send"
                            size="38px"
                            fontSize="18px"
                            bgColor={"var(--color--white)"}
                            onClick={() => {
                                const el = document.getElementById('contactForm');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                        />
                        <IconBtn 
                            icon="Heart"
                            size="38px"
                            fontSize="22px"
                            bgColor={"var(--color--white)"}
                            onClick={() => {
                                const el = document.getElementById('contactForm');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                        />
                    </div>
                </Menu>
                <Main>
                    <Texts>
                        <Title 
                            fontSizeMobile="32px"
                            children={`Chalé Araucária`}
                        />
                        <Description 
                            fontSizeMobile="14px"
                            textColor="var(--color--gray)"
                            children={`Quarto em Rio de Janeiro, Brasil<br> 1 quarto · 1 banheiro · 2 pavimentos e Sala de estar`}
                        />
                    </Texts>
                    <AirbnbInfos />
                    <Range>
                        <IoDiamondOutline />
                        <p>Achado! Este espaço costuma estar sempre reservado</p>
                    </Range>
                    <Price>
                        <div>
                            <span>R$520,20</span>
                            <p>Por 2 noites 19-21 de out.</p>
                        </div>
                        <Button 
                            buttonText="Reservar"
                            borderRadius="50px"
                            color="var(--degrade-airbnb)"
                            colorBorder="transparent"
                            onClick={() => {
                                const el = document.getElementById('contactForm');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                        />
                    </Price>
                </Main>
            </Container>
        </>
    )
}