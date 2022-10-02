import React from "react";
import styled from "styled-components";

const MyButton = styled.a`
  position: relative;
  // display: block;
  display: block;
  // width: 50vw;
  cursor: pointer;
  color: #000000;
  padding: 1.8em;
  margin-bottom: 40px;
  box-sizing: border-box;
  background: #fefefe;
  border: 2px solid #8599b1;
  border-radius: 0.75em;
  user-select: none;
  // text-align: center;
  transition: all 0.15s ease-out;
  transform-style: preserve-3d;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #c4d8f9;
    border-radius: inherit;
    // offset x offset y blur spread color
    box-shadow: 0 0 0 2px #8599b1, 0 0.625em 0 0 #e2dfff;
    transform: translate3d(0, 0.75em, -1em);
    transition: all 0.15s ease-out;
  }
  &:hover {
    transform: translateY(0.25em);
  }
`;

export function BlueButton({ text, clickEvent }) {
  return <MyButton onClick={clickEvent}>{text}</MyButton>;
}
