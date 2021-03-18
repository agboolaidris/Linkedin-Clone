import * as api from "../api/auth";
import * as type from "./type";

export const register = (state, history) => {
  console.log(state);
  return async (dispatch) => {
    try {
      const data = await api.register(state);
      history.push("/signup");
    } catch (error) {
      dispatch({ type: type.REGISTER_ERROR, payload: error.response.data });
      console.log(error.response);
    }
  };
};
