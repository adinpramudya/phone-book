import Navbar from "../components/Navbar/Navbar";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { Main, Wrapper } from "./HomePage.styled";
import List from "../components/List/List";
import { useDispatch, useSelector } from "react-redux";
import RootState from "../types/types";
import { useEffect } from "react";
import { FETCH_GRAPHQL_DATA, FETCH_GRAPHQL_DATA_ERROR, FETCH_GRAPHQL_DATA_SUCCESS } from "../store/types";
import { AnyAction } from "redux";
import { fetchGraphQLData } from "../store/actions/graphqlActions";
import { useAppDispatch, useAppSelector } from "../hooks";

function HomePage() {
  const dispatch = useAppDispatch();
  const data = useSelector((state: RootState) => state.graphql.data);
  const error = useSelector((state: RootState) => state.graphql.error);

  useEffect(() => {
    dispatch(fetchGraphQLData());
  }, [dispatch]);

  console.log("DISPATCH ", data);

  return (
    <Main>
      <Navbar></Navbar>
      <Wrapper>
        <Input></Input>
        <Button text="Search"></Button>
      </Wrapper>
      <Button text="Add Contact"></Button>
      {/* {data} */}
      <List></List>
    </Main>
  );
}

export default HomePage;
