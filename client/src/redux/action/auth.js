import * as api from "../api/auth";
import * as type from "./type";

export const checkLogin = () => {
  return async (dispatch) => {
    dispatch({ type: type.AUTH_LOADING });
    try {
      const data = await api.persistance();
      dispatch({ type: type.LOGIN_SUCCESS });
    } catch (error) {
      dispatch({ type: type.LOGIN_ERROR });
    }
  };
};

export const register = (state, history) => {
  return async (dispatch) => {
    dispatch({ type: type.AUTH_LOADING });
    try {
      const data = await api.register(state);
      dispatch({ type: type.REGISTER_SUCCESS, payload: data.msg });
      history.push("/signin");
    } catch (error) {
      dispatch({ type: type.REGISTER_ERROR, payload: error.response.data });
    }
  };
};

export const login = (state, history) => {
  return async (dispatch) => {
    dispatch({ type: type.AUTH_LOADING });
    try {
      const data = await api.login(state);
      dispatch({ type: type.LOGIN_SUCCESS });
      history.push("/dashboard");
    } catch (error) {
      dispatch({ type: type.LOGIN_ERROR, payload: error.response.data });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: type.AUTH_LOADING });
    try {
      const data = await api.logout();
      dispatch({ type: type.LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: type.LOGOUT_ERROR });
    }
  };
};
