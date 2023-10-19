// types/types.ts

// Define an interface that represents the shape of your Redux state
export interface RootState {
  graphql: {
    data: any; // Replace with the actual data type
    error: any; // Replace with the actual error type
  };
  // Add other parts of your state as needed
}

export default RootState;
