
import './App.css';
import Login from './Components/loginPage'
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";

// dont need yet... only when doing api call.. import thunk from "redux-thunk"

function App() {
  return (
    <>
      <Login/>
    </>
  );
}

const rootReducer = combineReducers({

})
export default App;
