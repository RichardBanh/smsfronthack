const initialState = { username: '', password: '', signin: false };

export const logIn = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return {
        username: action.payload.username,
        password: action.payload.password,
        signin: !state.signin,
      };

    default:
      return state;
  }
};
