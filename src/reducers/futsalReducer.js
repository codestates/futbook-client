import { GET_ALLFUTSAL_INFO } from "../actions";
import { initialState } from "./initialState";

const futsalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLFUTSAL_INFO:
      console.log(action.payload);
      return Object.assign({}, state, { futsalData: action.payload });

    default:
      return state;
  }
};

export default futsalReducer;
