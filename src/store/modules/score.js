// 점수 획득 점수 획득 없음

// 상태 사용자의 현재 점수

// 액션 정답인지 아닌지 판별, 정답 점수 +

// 초기 상태
const initialState = {
  score: 0,
  page: 0, // 0: 인트로 페이지, 1~quizs.length: 퀴즈 페이지, quizs.length+1: 마지막 페이지
  quizs: [
    {
      q: "대한민국의 수도는?",
      img: "/city/seoul.jpg",
      a: [
        {
          text: "서울",
          isCorrect: true,
        },
        {
          text: "인천",
          isCorrect: false,
        },
        {
          text: "부산",
          isCorrect: false,
        },
      ],
    },
    {
      q: "미국의 수도는?",
      img: "/city/washington.jpg",
      a: [
        {
          text: "워싱턴",
          isCorrect: true,
        },
        {
          text: "LA",
          isCorrect: false,
        },
        {
          text: "아틀란타",
          isCorrect: false,
        },
      ],
    },
  ],
};

// subreducer 액션 타입 -> 각 타입에 맞는 reducer실행됨
const CHECK_CORRECT = "score/CHECK_CORRECT";
const NEXT_PAGE = "score/NEXT_PAGE";
const RESET = "score/RESET";

// 액션 생성 함수 action creator
export function check({ isCorrect }) {
  return {
    type: CHECK_CORRECT,
    // reducer에서 action.payload로 접근
    payload: { isCorrect },
  };
}

export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

// reducer
export default function score(state = initialState, action) {
  switch (action.type) {
    case CHECK_CORRECT:
      return {
        // action값이 key값이 되거나 그 자체를 이용
        ...state,
        score: action.payload.isCorrect ? state.score + 10 : state.score,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        score: 0,
        page: 0,
      };
    default:
      return state;
  }
}
