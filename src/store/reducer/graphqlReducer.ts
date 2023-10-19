// reducers/graphqlReducer.ts
import { Reducer } from "redux";
import { FETCH_GRAPHQL_DATA, FETCH_GRAPHQL_DATA_SUCCESS, FETCH_GRAPHQL_DATA_ERROR } from "../types";
import { RootState } from "../../types/types";

const initialState: RootState = {
  graphql: {
    data: null,
    error: null,
  },
  // Initialize other parts of your state as needed
};

const graphqlReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GRAPHQL_DATA:
      return {
        ...state,
        graphql: {
          ...state.graphql,
          data: null,
          error: null,
        },
      };
    case FETCH_GRAPHQL_DATA_SUCCESS:
      return {
        ...state,
        graphql: {
          ...state.graphql,
          data: action.payload,
          error: null,
        },
      };
    case FETCH_GRAPHQL_DATA_ERROR:
      return {
        ...state,
        graphql: {
          ...state.graphql,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default graphqlReducer;
