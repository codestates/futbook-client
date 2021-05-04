// action types
// sign part
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
//user part
export const GET_USER_INFO = "GET_USER_INFO";
// booking part
export const BOOK_FUTSAL = "BOOK_FUTSAL";
export const CHECK_BOOK = "CHECK_BOOK";
export const CANCEL_BOOK = "CANCEL_BOOK";
// futsal part
export const GET_ALLFUTSAL_INFO = "GET_ALLFUTSAL_INFO";

// actions creator functions
// action creator: sign
export const signIn = accessToken => {
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
export const getUserInfo = userData => {
  return {
    type: GET_USER_INFO,
    payload: userData,
  };
};

//action creator: booking
export const bookFutsal = () => {
  return {
    type: BOOK_FUTSAL,
    payload: {},
  };
};

export const checkBook = () => {
  return {
    type: CHECK_BOOK,
    payload: {},
  };
};

export const cancelBook = () => {
  return {
    type: CANCEL_BOOK,
    payload: {},
  };
};

// action creator: futsal
export const getAllFutsalInfo = futsalDatas => {
  return {
    type: GET_ALLFUTSAL_INFO,
    payload: futsalDatas,
  };
};
