import { isEmail, isEmpty, isLength } from "./commonValidator";
import { toast } from "react-toastify";
export const step1Validator = (email, username) => {
  if (!isEmail(email)) {
    toast.warning("Email is not valid");
    return false;
  } else if (!isEmpty(email)) {
    toast.warning("Email is Required");
    return false;
  } else if (!isEmpty(username)) {
    toast.warning("username is Required");
    return false;
  } else if (isLength(username, 6)) {
    toast.warning("username most be greater than 6 characters");
    return false;
  } else {
    return true;
  }
};
