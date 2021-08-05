import * as actionTypes from "../actions/actionTypes";
import mergeObjects from "../utils/mergeObjects";

const initialState = {
  auth: {},
  loading: false
};

// login.
const loginStart = (state, action) =>
  mergeObjects(state, { loading: true, auth: {} });

const loginSuccess = (state, action) => {
  return mergeObjects(state, {
    loading: false,
    auth: action.token
  });
}

const loginFail = (state, action) =>
  mergeObjects(state, { loading: true, error: action });

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // login
    case actionTypes.LOGIN_START:
      return loginStart(state, action);
    case actionTypes.LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case actionTypes.LOGIN_FAIL:
      return loginFail(state, action);
      
    default:
      return state;
  }
};

export default reducer;