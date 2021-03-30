import * as type from "./type";
import * as api from "../api/profile";

export const getUserProfile = () => {
  return async (dispatch) => {
    dispatch({ type: type.PROFILE_LOADING });
    try {
      const data = await api.getUserProfile();
      dispatch({ type: type.GET_USER_PROFILE, payload: data.data });
    } catch (error) {
      dispatch({ type: type.GET_USER_PROFILE, payload: {} });
    }
  };
};

export const postUserProfile = (profile, history) => {
  return async (dispatch) => {
    dispatch({ type: type.PROFILE_LOADING });
    try {
      console.log(profile);
      const data = await api.postUserProfile(profile);
      console.log(data);
      dispatch({ type: type.POST_USER_PROFILE, payload: data.data });
    } catch (error) {
      dispatch({ type: type.PROFILE_ERROR, payload: error.response.data });
    }
  };
};

//clear user profile when logout
export const clearUserProfile = () => {
  return (dispatch) => {
    dispatch({ type: type.CLEAR_USER_PROFILE, payload: null });
  };
};
