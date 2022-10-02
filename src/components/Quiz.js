import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BlueButton } from "./BlueButton";
import { Progress } from "./Progress";
import { check, nextPage } from "../store/modules/score";
import styled from "styled-components";

const Title = styled.h1`
  margin: 50px 0;
`;
const Img = styled.img`
  width: inherit;
`;

export function Quiz() {
  const quizs = useSelector((state) => state.score.quizs);
  const page = useSelector((state) => state.score.page);
  const dispatch = useDispatch();

  return (
    <>
      {quizs[page - 1].img && (
        <Img src={quizs[page - 1].img} alt={quizs[page - 1]} />
      )}
      {/* 1페이지에 0번째 퀴즈, 2페이지에 1번째 퀴즈... */}
      <Title>{quizs[page - 1].q}</Title>
      {quizs[page - 1].a.map((item) => {
        return (
          <BlueButton
            text={item.text}
            key={item.text}
            clickEvent={() => {
              // 정답체크
              dispatch(check({ isCorrect: item.isCorrect }));
              // 다음 페이지로 이동
              dispatch(nextPage());
            }}
          />
        );
      })}
      <Progress page={page} maxPage={quizs.length} />
    </>
  );
}
