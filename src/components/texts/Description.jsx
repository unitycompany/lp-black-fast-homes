import React from "react";
import styled from "styled-components";

const DescriptionStyled = styled.p`
    font-size: ${({ fontSize }) => fontSize || "22px"};
    color: ${({ textColor }) => textColor || "var(--color--black)"};
    line-height: 1.1;
    font-weight: 400;

    @media (max-width: 768px){
        font-size: ${({ fontSizeMobile}) => fontSizeMobile || "18px"};
        font-weight: 300;
    }

    & b {
        font-weight: 400;
        line-height: 1.1;
        color: ${({ colorAdjust }) => colorAdjust || "var(--color--black)"};
    }
`

export default function Description({
    children, 
    fontSize,
    fontSizeMobile,
    colorAdjust,
    textColor
}) {
    return (
        <>
            <DescriptionStyled 
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