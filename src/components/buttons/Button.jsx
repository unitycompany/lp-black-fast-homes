import React from "react";
import styled from "styled-components";

const Cta = styled.button`
    border: 1px solid ${({ colorBorder }) => colorBorder || "var(--color--green)"};
    background: ${({ color }) => color || "var(--color--green)"};
    color: ${({ textColor }) => textColor || "var(--color--white)"};
    border-radius: ${({ borderRadius }) => borderRadius || "12px"};
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    font-weight: ${({ fontWeight }) => fontWeight || "500"};
    position: relative;

    @media (max-width: 768px){
        font-size: 16px;
    }
`

export default function Button({
    buttonText = "Falar com um consultor",
    color,
    colorBorder,
    textColor,
    fontWeight,
    onClick,
    borderRadius
}) {
    return (
        <>
            <Cta color={color} colorBorder={colorBorder} textColor={textColor} fontWeight={fontWeight} onClick={onClick} borderRadius={borderRadius}> 
                {buttonText}
            </Cta>
        </>
    )
}