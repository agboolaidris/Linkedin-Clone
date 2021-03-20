import * as type from "../action/type";
const initalState = {
  profile: null,
  profiles: null,
  isLoading: false,
};

const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case type.PROFILE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
      break;

    case type.GET_USER_PROFILE:
      return {
        ...state,
        isLoading: false,
        profile: action.payload,
      };
      break;

    case type.CLEAR_USER_PROFILE:
      return {
        ...state,
        isLoading: false,
        profile: null,
      };
      break;

    default:
      return state;
      break;
  }
};

export default Reducer;
