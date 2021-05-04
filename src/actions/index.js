import axios from "axios";

// action types
// sign part
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
//user part
export const GET_USER_INFO = "GET_USER_INFO";
// booking part
export const CHECK_BOOK = "CHECK_BOOK";
// futsal part
export const GET_ALLFUTSAL_INFO = "GET_ALLFUTSAL_INFO";

//middleware
export const fetchData = (url, config, action) => async dispatch => {
  try {
    const { data } = await axios.get(url, config);
    const result = data.data;
    console.log(result);
    dispatch(action(result));
  } catch (err) {
    return console.log(err);
  }
};

export const pullData = (url, body, config, action) => async dispatch => {
  try {
    const { data } = await axios.post(url, body, config);
    const result = data.data;
    dispatch(action(result));
  } catch (err) {
    return console.log(err);
  }
};

// actions creator functions
// action creator: sign
export const signIn = ({ accessToken }) => {
  return {
    type: SIGN_IN,
    payload: { accessToken },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: { accessToken: null },
  };
};

// action creator: user
export const getUserInfo = ({ userData }) => {
  return {
    type: GET_USER_INFO,
    payload: userData,
  };
};

//action creator: booking
export const checkBook = ({ bookingDatas }) => {
  console.log(bookingDatas);
  return {
    type: CHECK_BOOK,
    payload: bookingDatas,
  };
};

// action creator: futsal
export const getAllFutsalInfo = ({ futsalDatas }) => {
  return {
    type: GET_ALLFUTSAL_INFO,
    payload: futsalDatas,
  };
};
