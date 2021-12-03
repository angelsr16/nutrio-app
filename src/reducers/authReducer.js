import { toast } from "react-toastify";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      toast.success("Welcome...");
      console.log("state: ", state);
      return state;
    case "SIGN_IN_ERR":
      toast.error("Sign in error...");
      return state;
    case "SIGN_OUT":
      console.log("Current state: ", state);
      return state;
    case "SIGN_UP":
      toast.info("User created");
      return state;
    case "SIGN_UP_ERR":
      toast.error("Error creating the user");
      return state;
    default:
      return state;
  }
};

export default authReducer;
