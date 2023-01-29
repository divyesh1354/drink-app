import { gql } from "graphql-request";
//create our query
const getAllDrinkQuery = gql`
  query {
    getAllDrinks {
      id
      name
      price
      image
    }
  }
`;
export { getAllDrinkQuery };