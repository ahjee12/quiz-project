import React from "react";
import styled from "styled-components";

const MyButton = styled.a`
  position: relative;
  // display: block;
  display: inline-block;
  // width: 50vw;
  cursor: pointer;
  color: #000000;
  padding: 1.25em 2em;
  box-sizing: border-box;
  background: #fff0f0;
  border: 2px solid #b18597;
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
    background: #f9c4d2;
    border-radius: inherit;
    // offset x offset y blur spread color
    box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    transform: translate3d(0, 0.75em, -1em);
    transition: all 0.15s ease-out;
  }
  &:hover {
    transform: translateY(0.25em);
    background: #ffe9e9;
  }
`;

export function PinkButton({ text, clickEvent }) {
  return <MyButton onClick={clickEvent}>{text}</MyButton>;
}
