import React, { useContext } from "react";
import { CartContext, Init } from "../../context/ShoppingCart";
import styles from "./Header.module.scss";

const Header = () => {
  const { totalItems, totalAmount, removeProduct } = useContext<Init>(CartContext);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <p>Company Logo</p>
        </div>
        <div className={styles.cart}>
          <div className={styles.cartInfo}>
            <table>
              <tbody>
                <tr>
                  <td>No. of items</td>
                  <td>:</td>
                  <td>
                    <strong>{totalItems}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>:</td>
                  <td>
                    <strong>{totalAmount}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            type="button"
            className={styles.cartIcon}
            onClick={removeProduct}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
