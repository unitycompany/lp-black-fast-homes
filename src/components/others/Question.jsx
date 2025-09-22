import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import styled, { css } from "styled-components";

const Item = styled.li`
    width: 100%;
    background-color: var(--color--background-white);
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    border-radius: 16px;
    transition: background-color 220ms ease, border 220ms ease, transform 220ms ease;

    ${props => props.$isOpen && css`
        background-color: transparent;
        box-shadow: inset 0 0 0 0.2px rgba(0, 0, 0, 0.4);
    `}

    & > .head {
        width: 100%;
        padding: 4px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        margin-bottom: -12px;

        & span {
            font-size: 16px;
            font-weight: 400;
            width: 80%;
            line-height: 1.1;

            @media (max-width: 768px){
                font-size: 14px;
            }
        }

        & button {
            padding: 8px;
            border-radius: 6px;
        /* Avoid negative margin when closed: it causes headers to overlap and appear to disappear
           when the body is collapsed. Use conditional margin based on $isOpen prop. */
        margin-bottom: ${props => props.$isOpen ? '-12px' : '0'};
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background-color: var(--color--white);
            cursor: pointer;
            transition: transform 220ms ease;
            display: inline-grid;
            place-items: center;
        }
    }

    & > .body {
        width: 100%;
        overflow: hidden;
        transition: max-height 300ms cubic-bezier(.2,.8,.2,1), opacity 220ms ease, transform 300ms cubic-bezier(.2,.8,.2,1);
        transform-origin: top;
        opacity: 1;
    }

    & p {
        font-weight: 300;
        color: var(--color--gray);
        margin: 0;
        padding: 6px 0 8px 0;

        @media (max-width: 768px){
            font-size: 14px;
        }
    }
`

export default function Question({
    questionText,
    responseText,
    isOpen = false,
    onToggle = () => {}
}) {
    // measure content height to animate max-height smoothly
    const contentRef = React.useRef(null);
    const [maxH, setMaxH] = React.useState(isOpen ? undefined : 0);

    React.useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        if (isOpen) {
            // set to scrollHeight to expand
            setMaxH(el.scrollHeight + 8); // small padding
        } else {
            // collapse
            setMaxH(0);
        }
    }, [isOpen, responseText]);

    return (
        <>
            <Item $isOpen={isOpen}>
                <div className="head" onClick={onToggle} role="button" aria-expanded={isOpen}>
                    <span>{questionText}</span>
                    <button aria-hidden>
                        <AiOutlinePlus style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 220ms ease' }} />
                    </button>
                </div>

                <div className="body" ref={contentRef} style={{ maxHeight: maxH === undefined ? 'none' : `${maxH}px`, opacity: isOpen ? 1 : 0.0, transform: isOpen ? 'translateY(0)' : 'translateY(-6px)' }}>
                    <p>{responseText}</p>
                </div>
            </Item>
        </>
    )
}