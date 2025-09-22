import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsBoxArrowUp } from "react-icons/bs";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import styled from "styled-components";

const Icon = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: ${({ size }) => size || "40px"};
  height: ${({ size }) => size || "40px"};
  background: ${({ bgColor }) => bgColor || "var(--color--white)"};
  color: ${({ color }) => color || "var(--color--black)"};
  font-size: ${({ fontSize }) => fontSize || "24px"};
  cursor: pointer;
`;

const optionsIcons = {
  Search: <CiSearch size/>,
  Global: <AiOutlineGlobal />,
  Menu: <IoMenu />,
  ArrowLeft: <IoIosArrowRoundBack />,
  Heart: <CiHeart />,
  Send: <BsBoxArrowUp />,
};

export default function IconBtn({
  size,
  color,
  bgColor,
  icon,
  children,
  fontSize,
  onClick
}) {
  return (
    <Icon size={size} color={color} bgColor={bgColor} fontSize={fontSize} onClick={onClick} data-aos="zoom-in">
      {optionsIcons[icon] || null}
      {children}
    </Icon>
  );
}
