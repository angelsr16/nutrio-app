const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      console.log("state: ", state);
      return state;
    case "SEND_MESSAGE_ERROR":
      return state;
    default:
      return state;
  }
};

export default authReducer;