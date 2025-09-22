import React from "react";
import styled from "styled-components";
import Title from "../../../components/texts/Title";
import IconBtn from "../../../components/buttons/IconBtn";

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
`

const Texts = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Actions = styled.ol`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    & li {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: underline;
        gap: 0px;
    }
`

const Images = styled.div`
    height: 500px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 4px;
    grid-row-gap: 4px;
`

const Image = styled.div`
    height: 100%;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 1s ease-in-out;
    }
    
    &:nth-child(1){
        grid-area: 1 / 1 / 3 / 3;
        border-radius: 16px 0 0 16px;
    }
    &:nth-child(2){
        grid-area: 1 / 3 / 2 / 4;
    }
    &:nth-child(3){
        grid-area: 2 / 3 / 3 / 4;
    }
    &:nth-child(4){
        grid-area: 1 / 4 / 2 / 5;
        border-radius: 0 16px 0 0px;
    }
    &:nth-child(5){
        grid-area: 2 / 4 / 3 / 5;
        border-radius: 0 0 16px 0px;
    }
`

export default function AirbnbGalery () {
    return (
        <>
            <Container>
                <Texts>
                    <Title 
                        children={`Chalé Araucária`}
                        fontSize="32px"
                    />
                    <Actions>
                        <li>
                            <IconBtn 
                                icon="Send"
                                bgColor="transparent"
                                size="30px"
                            />
                            <p>Compartilhar</p>
                        </li>
                        <li>
                            <li>
                                <IconBtn 
                                    icon="Heart"
                                    bgColor="transparent"
                                    size="30px"
                                />
                                <p>Salvar</p>
                            </li>
                        </li>
                    </Actions>
                </Texts>
                <Images>
                    <Image data-aos="zoom-in">
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/795a497e-4268-40dc-d493-39b6ced14900/public" alt="" />
                    </Image>
                    <Image data-aos="zoom-in" data-aos-delay="100">
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/51db3bc6-89d7-49e4-2849-5292474c5100/public" alt="" />
                    </Image>
                    <Image data-aos="zoom-in" data-aos-delay="200">
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2edf15fc-4fec-4652-8597-7519acefec00/public" alt="" />
                    </Image>
                    <Image data-aos="zoom-in" data-aos-delay="300">
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1cf9ca01-cadc-43ed-092e-6a61d87e9400/public" alt="" />
                    </Image>
                    <Image data-aos="zoom-in" data-aos-delay="400">
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3d23dd0-94d8-4172-acfe-8bed6edc1f00/public" alt="" />
                    </Image>
                </Images>
            </Container>
        </>
    )
}