import * as actionTypes from "../actionTypes";
import axios from "axios";

const login = (data, history) => async (dispatch) => {
  dispatch({ type: actionTypes.LOGIN_START });
  try {
    const response = await axios.post("http://localhost:4000/signin", data);
    if (response) {
      dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: response.data.token })
      const AuthToken = `Bearer ${response.data.token}`;
      localStorage.setItem("AuthToken", AuthToken);
      axios.defaults.headers.common["Authorization"] = AuthToken;
      history.push("/");
    }
  } catch (error) {
    dispatch({ type: actionTypes.LOGIN_FAIL });
  }
}

export default login;
