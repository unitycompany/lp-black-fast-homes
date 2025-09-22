import React, { useState, useEffect } from "react";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import styled from "styled-components";

const Button = styled.button`
    border: none;
    padding: 12px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    background: var(--color--green);
    color: var(--color--white);
    position: relative;
    transition: all .2s ease-in-out;
    position: absolute;
    left: ${({ left }) => left || 'auto'};
    top: ${({ top }) => top || 'auto'};
    transform: translateY(-50%);
    z-index: 999;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);

    @media (max-width: 768px) {
        left: ${({ leftMobile }) => leftMobile || 'auto'};
        top: ${({ topMobile }) => topMobile || 'auto'};
        font-size: 18px;
        padding: 10px;
    }

    &::before {
        width: 130%;
        height: 130%;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--color--green);
        opacity: 0.8;
        z-index: -2;
        border-radius: 18px;
        transition: all .2s ease-in-out;

        @media (max-width: 768px) {
            width: 130%;
            height: 130%;
        }
    }

    &:hover::before {
        width: 125%;
        height: 125%;
    }
`

export default function PrevNext ({ Direction = true, left, top, leftMobile, topMobile, onClick, ...rest }) {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // On desktop the design wants both arrows to look like right arrows ("-> ->").
    // On mobile the prev button should be left and next should be right ("<- ->").
    const Icon = isMobile ? (Direction ? HiOutlineArrowRight : HiOutlineArrowLeft) : HiOutlineArrowRight;

    return (
        <>
            <Button aria-label={Direction ? "Próximo" : "Anterior"} left={left} top={top} leftMobile={leftMobile} topMobile={topMobile} onClick={onClick} {...rest}>
                <Icon />
            </Button>
        </>
    )
}