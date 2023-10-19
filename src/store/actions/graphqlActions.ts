// actions/graphqlActions.ts
import { Dispatch } from "redux";
import { client } from "../../graphql/apolloClient";
import { FETCH_GRAPHQL_DATA_SUCCESS, FETCH_GRAPHQL_DATA_ERROR } from "../types";
import { GET_DATA } from "../../graphql/queries";

export const fetchGraphQLData = () => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await client.query({
        query: GET_DATA,
      });
      dispatch({
        type: FETCH_GRAPHQL_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_GRAPHQL_DATA_ERROR,
        payload: error,
      });
    }
  };
};
