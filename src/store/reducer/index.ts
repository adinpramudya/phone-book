// rootReducer.js

import { combineReducers } from "redux";
import graphqlReducer from "./graphqlReducer"; // Import your GraphQL-related reducer

const rootReducer = combineReducers({
  graphqlReducer,
});

export default rootReducer;
