import React, { useState, useEffect } from "react";
import Counter from "../../Counter/Counter";
import styles from "./ProductItem.module.scss";
import { ProductLocal } from "../../../context/ShoppingCart";

type Props = {
  addToCart: (product: ProductLocal) => void;
  id: number;
  price: number;
  image: string;
  name: string;
};

const ProductItem = ({
  addToCart,
  id,
  price,
  image,
  name,
}: Props) => {
  const [quantity, updateQuantity] = useState<number>(1);
  const [isAdded, setAddState] = useState<boolean>(false);

  useEffect(() => {
    if (!isAdded) {
      return;
    }
    const timer1 = setTimeout(() => setAddState(false), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [isAdded]);

  const addButtonClicked = (imageLocal: string, nameLocal: string, priceLocal: number, idLocal: number, quantityLocal: number) => {
    const selectedProduct = {
      image: imageLocal,
      name: nameLocal,
      price: priceLocal,
      id: idLocal,
      quantity: quantityLocal,
    };
    addToCart(selectedProduct);
    setAddState(true);
  };

  return (
    <div className={styles.productWrapper}>
      <div className={styles.product}>
        <div className={styles.outline}>
          <div
            className={styles.productImage}
            role="button"
          >
            <img src={image} alt={name} />
          </div>
          <h4 className={styles.productName}>{`${name}`}</h4>
          <p className={styles.productPrice}>{price}</p>
          <Counter productQuantity={quantity} updateQuantity={updateQuantity} />
          <div className={styles.productAction}>
            <button
              className={!isAdded ? "" : styles.added}
              type="button"
              onClick={() =>
                addButtonClicked(image, name, price, id, quantity)
              }
            >
              {!isAdded ? "ADD TO CART" : "ADDED"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
