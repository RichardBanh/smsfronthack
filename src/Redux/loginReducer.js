const initialState = { username: "", signin: false };
//need to reset for false and username
export const login = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        username: action.payload.username,
        signin: action.payload.signin,
      };

    default:
      return state;
  }
};
