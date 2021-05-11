import './App.css';
import Login from './Components/loginPage';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

// dont need yet... only when doing api call.. import thunk from "redux-thunk"

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

const rootReducer = combineReducers({});

const store = createStore(rootReducer)
export default App;
