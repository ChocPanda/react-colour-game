import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/root";

const configureStore = initState => {
  const middleWare = [thunk];
  if (process.env.NODE_ENV !== "production") {
    middleWare.push(logger);
  }

  const store = createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(...middleWare))
  );

  return store;
};

export default configureStore;