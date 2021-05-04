import { GET_ALLFUTSAL_INFO } from "../actions";
import { initialState } from "./initialState";

const futsalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLFUTSAL_INFO:
      return Object.assign.apply({}, state, {});

    default:
      return state;
  }
};

export default futsalReducer;
