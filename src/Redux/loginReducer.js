const initialState = { username: "", signin: true };
//need to reset for false
export const login = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        username: action.payload.username,
        signin: !state.signin,
      };

    default:
      return state;
  }
};
