import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import laptopReducer from "./reducers/laptopReducers";
import mobileReducer from "./reducers/mobileReducer";
import usersReducers from "./reducers/usersReducers";

var rootReducer = combineReducers({
  laptopReducer,
  mobileReducer,
  usersReducers,
});
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
