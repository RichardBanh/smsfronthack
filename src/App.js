import "./App.css";
import { Login } from "./Components/LoginPage";
import { createStore, combineReducers, applyMiddleware } from "redux";

import { Provider } from "react-redux";

import { Main } from "./Components/mainAppScreen";

import { login } from "./Redux/login";
import { patient } from "./Redux/patientClick";

// dont need yet... only when doing api call.. import thunk from "redux-thunk"

function App() {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}

const rootReducer = combineReducers({ login, patient });

const store = createStore(rootReducer);
export default App;
