import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PinkButton } from "./components/PinkButton";
import { Quiz } from "./components/Quiz";
import { nextPage, reset } from "./store/modules/score";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  max-width: 360px;
  margin: auto;
  text-align: center;
`;

const Img = styled.img`
  width: inherit;
`;
const Header = styled.h1`
  margin: 30px 0;
`;

const SubHeader = styled.h2`
  font-size: 1.1em;
  color: #8a8e90;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Score = styled.div`
  font-size: 4em;
  color: #f92b46;
`;

function App() {
  const score = useSelector((state) => state.score.score);
  const page = useSelector((state) => state.score.page);
  const quizs = useSelector((state) => state.score.quizs);
  const dispatch = useDispatch();
  const [num, setNum] = useState(0);

  // num 바뀜 -> render 반복 => num = 0
  useEffect(() => {
    if (page > quizs.length) {
      const totalScore = score;
      console.log("score: " + score);
      const interval = setInterval(() => {
        if (num < totalScore) {
          setNum(num + 1);
          console.log("num: " + num);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [page, num]);

  // const scoreBoard = () => {
  //   const totalScore = score;
  //   const interval = setInterval(() => {
  //     console.log("totalScore: " + totalScore);
  //     if (num < totalScore) {
  //       setNum(num + 1);
  //       console.log("num: " + num);
  //       return num;
  //     } else {
  //       return clearInterval(interval);
  //     }
  //     // return num;
  //   }, 100);
  // };

  return (
    <div>
      {page === 0 && (
        <Main>
          <Img src="city/main.jpg" alt="아르헨티나 풍경" />
          <Header>나라별 수도 퀴즈</Header>
          <SubHeader>수도 고인물이 푸는 퀴즈</SubHeader>
          <PinkButton
            text="테스트 시작!"
            clickEvent={() => dispatch(nextPage())}
          />
        </Main>
      )}
      {page > 0 && page <= quizs.length && (
        <Main>
          <Quiz />
        </Main>
      )}
      {page > quizs.length && (
        <Main>
          <Header>당신의 수도 퀴즈 점수는?</Header>
          <Score>{num}점</Score>
          <SubHeader></SubHeader>
          <PinkButton
            text="다시 테스트하기!"
            clickEvent={() => {
              dispatch(reset());
              setNum(0);
            }}
          />
        </Main>
      )}
    </div>
  );
}

export default App;
