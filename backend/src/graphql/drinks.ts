import { gql } from "apollo-server-express";

const drinks = gql`
  type Drink {
    id: ID!
    name: String
    price: Int
    image: String
  }
  #handle user commands
  type Query {
    getAllDrinks: [Drink] #will return multiple Drink instances
  }
`;
export default drinks;