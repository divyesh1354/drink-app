import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";
import { ProductWeb } from "../context/ShoppingCart";
import { request } from "graphql-request";
import { getAllDrinkQuery } from "./constants";

const Home: FunctionComponent<{ products: ProductWeb[] }> = ({ products }) => {
  return (
    <div className='container'>
      <Header />
      <Products
        productsList={products}
      />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await request("http://localhost:4000/graphql", getAllDrinkQuery);
  const result = res.getAllDrinks;
  return { props: { products: result } };
};
export default Home;
