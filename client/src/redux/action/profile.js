import * as type from "./type";
import * as api from "../api/profile";

export const getUserProfile = () => {
  return async (dispatch) => {
    dispatch({ type: type.PROFILE_LOADING });
    try {
      const data = await api.getUserProfile();
      dispatch({ type: type.GET_USER_PROFILE, payload: data.data });
      console.lod(data);
    } catch (error) {
      dispatch({ type: type.GET_USER_PROFILE, payload: {} });
      console.log(error.response);
    }
  };
};

//clear user profile when logout
export const clearUserProfile = () => {
  return (dispatch) => {
    dispatch({ type: type.CLEAR_USER_PROFILE, payload: null });
  };
};
