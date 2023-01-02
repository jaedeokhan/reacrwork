const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 액션
export const increase = (userName) => ({ type: INCREMENT, payload: userName });
export const decrease = (userName) => ({ type: DECREMENT, payload: userName });

// 상태
const initState = {
  userName: 'ssar',
  number: 1,
};

// 리듀서 : 액션의 결과를 걸러내는 친구
const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + 1, userName: action.payload };
    // return 되면 그걸 호출한 쪽에서 받는게 아니라 return 되는 순간 UI 변경
    case DECREMENT:
      return { number: state.number - 1, userName: action.payload };
    default:
      return state;
  }
};

export default reducer;
