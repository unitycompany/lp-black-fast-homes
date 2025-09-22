import React from "react";
import styled from "styled-components";
import AirbnbLogo from '../../../assets/logotipo/logotipo-airbnb-reference-fasthomes.svg';
import IconBtn from "../../../components/buttons/IconBtn";


const Content = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #00000020;
    padding: 10px 10px 24px 10px;

    & img {
        width: 100px;
    }
`

const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 4px 6px 4px 10px;
    border-radius: 40px;
    border: 1px solid #00000060;
`

const SearchOptions = styled.ol`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & li {
        border-right: 1px solid #00000020;
        padding: 0 10px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
            color: var(--color--black-light);
        }

        &:nth-child(3){
            border: none;
        }
    }
`

const Menu = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
`

export default function AirbnbHeader() {
    return (
        <>
            <Content>
                <img src={AirbnbLogo} alt="logotipo-airbnb-fasthomes-reference" loading="lazy" data-aos="zoom-in"/>
                <Search data-aos="fade-up">
                    <SearchOptions onClick={() => {
                                const el = document.getElementById('contactForm');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}>
                        <li>Qualquer lugar</li>
                        <li>Qualquer semana</li>
                        <li>Hóspedes?</li>
                    </SearchOptions>
                    <IconBtn 
                        icon="Search"
                        bgColor="var(--color--airbnb)"
                        color="var(--color--white)"
                        size="28px"
                        fontSize="20px"
                        onClick={() => {
                                const el = document.getElementById('contactForm');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                    />
                </Search>
                <Menu data-aos="fade-up">
                    <p>Torne-se um anfitrião</p>
                    <IconBtn 
                        icon="Global"
                        size="36px"
                        fontSize="20px"
                        bgColor="var(--color--green-surface)"
                        color="var(--color--black)"
                        onClick={() => {
                                const el = document.getElementById('contactForm');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                    />
                    <IconBtn 
                        icon="Menu"
                        size="36px"
                        fontSize="20px"
                        bgColor="var(--color--green-surface)"
                        color="var(--color--black)"
                        onClick={() => {
                                const el = document.getElementById('contactForm');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                    />
                </Menu>
            </Content>
        </>
    )
}