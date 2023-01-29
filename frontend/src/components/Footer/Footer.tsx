import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; 2023 <strong>Drink Store</strong>
      </p>
    </footer>
  );
};

export default Footer;
