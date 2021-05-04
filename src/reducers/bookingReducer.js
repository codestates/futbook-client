import { BOOK_FUTSAL, CANCEL_BOOK, CHECK_BOOK } from "../actions";
import { initialState } from "./initialState";

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_FUTSAL:
      return Object.assign.apply({}, state, {});

    case CHECK_BOOK:
      return Object.assign.apply({}, state, {});

    case CANCEL_BOOK:
      return Object.assign.apply({}, state, {});

    default:
      return state;
  }
};

export default bookingReducer;
