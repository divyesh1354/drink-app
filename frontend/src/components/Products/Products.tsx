import React, { useContext } from "react";
import { TransitionGroup } from "react-transition-group";
import ProductItem from "./ProductItem/ProductItem";
import NoResults from "../NoResults/NoResults";
import styles from "./Products.module.scss";
import { CartContext, Init, ProductWeb } from "../../context/ShoppingCart";

type Props = {
  productsList: ProductWeb[];
};

const Products = ({ productsList }: Props) => {
  const { addProduct } = useContext<Init>(CartContext);

  const productsData = productsList
    .map((product) => {
      return (
        <ProductItem
          price={product.price}
          name={product.name}
          image={product.image}
          id={parseInt(product.id, 10)}
          addToCart={addProduct}
        />
      );
    });

  // Empty and Loading States
  let view;
  if (productsData.length <= 0) {
    view = <NoResults />;
  } else {
    view = (
      <TransitionGroup component="div" className={styles.products}>
        {productsData}
      </TransitionGroup>
    );
  }
  return <div className={styles.productsWrapper}>{view}</div>;
};

export default Products;
