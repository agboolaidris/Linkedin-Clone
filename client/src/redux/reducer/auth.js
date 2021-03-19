import { toast } from "react-toastify";
import * as type from "../action/type";
const initialState = {
  isAuthenticated: false,
  isLoading: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.REGISTER_ERROR:
      toast.warning(action.payload.msg);
      return state;
      break;
    default:
      return state;
      break;
  }
};

export default Reducer;
