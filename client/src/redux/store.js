import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Root from "./reducer/index";
const middleware = [thunk];
const store = createStore(
  Root,
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
