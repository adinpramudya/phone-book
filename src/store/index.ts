// store.ts
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
// import { RootState } from "../types/types";
import { configureStore } from "@reduxjs/toolkit";
import graphqlReducer from "./reducer/graphqlReducer";

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = configureStore({
  reducer: {
    graphql: graphqlReducer,
    // Add other reducers here if needed
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
