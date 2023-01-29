import drinkData from "../drinkData";

const Resolvers = {
  Query: {
    getAllDrinks: () => drinkData,
  },
};
export default Resolvers;