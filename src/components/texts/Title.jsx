import React from "react";
import styled from "styled-components";

const TitleStyled = styled.h1`
    font-size: ${({ fontSize }) => fontSize || "36px"};
    color: ${({ textColor }) => textColor || "var(--color--white)"};
    line-height: 1;
    font-weight: 400;

    @media (max-width: 768px){
        font-size: ${({ fontSizeMobile}) => fontSizeMobile || "26px"};
    }

    & b {
        font-weight: 400;
        line-height: 1;
        color: ${({ colorAdjust }) => colorAdjust || "var(--color--white)"};
    }
`

export default function Title({
    children, 
    fontSize,
    colorAdjust,
    fontSizeMobile,
    textColor
}) {
    return (
        <>
            <TitleStyled 
                fontSize={fontSize}
                dangerouslySetInnerHTML={{ __html: children }}
                colorAdjust={colorAdjust}
                fontSizeMobile={fontSizeMobile}
                textColor={textColor}
                data-aos="fade-up"
            />
        </>
    )
}