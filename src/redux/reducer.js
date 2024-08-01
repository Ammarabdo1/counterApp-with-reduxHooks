import { ACTIONS } from "./type";
const initialState = {
  count: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INCREASE:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREASE:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer