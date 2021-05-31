import { CHECK_BOOK } from "../actions";
import { initialState } from "./initialState";

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_BOOK:
      return Object.assign({}, state, {
        bookingData: action.payload,
      });

    default:
      return state;
  }
};

export default bookingReducer;
