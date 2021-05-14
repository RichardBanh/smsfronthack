import "./App.css";
import { createStore, combineReducers, applyMiddleware } from "redux";

import { Provider } from "react-redux";

import { Main } from "./Components/mainAppScreen";

import { login } from "./Redux/login";
import { patient } from "./Redux/patientClick";
import { patientChart } from "./Redux/patientChart";

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

const rootReducer = combineReducers({ login, patient, patientChart });

const store = createStore(rootReducer);
export default App;
