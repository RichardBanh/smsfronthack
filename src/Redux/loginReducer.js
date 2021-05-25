const initialState = { username: "Dr John Harris", signin: false };
//need to reset for false and username
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
