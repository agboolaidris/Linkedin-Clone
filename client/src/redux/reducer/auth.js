import { toast } from "react-toastify";
import * as type from "../action/type";
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: {},
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
      };
      break;

    case type.REGISTER_SUCCESS:
      toast.success("Congratulation you are now a member!!! Kindly Login");
      return {
        ...state,
        isLoading: false,
      };
      break;

    case type.REGISTER_ERROR:
      toast.warning(action.payload.msg);
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
      };
      break;

    case type.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };
      break;

    case type.LOGIN_ERROR:
      toast.warning(action.payload?.msg);
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: {},
      };
      break;

    case type.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: {},
      };
      break;

    case type.LOGOUT_ERROR:
      toast.warning(action.payload?.msg);
      return state;
      break;

    default:
      return state;
      break;
  }
};

export default Reducer;
