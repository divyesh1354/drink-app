import "../styles/scss/base.scss";
import React from "react";
import Head from "next/head";
import type { AppProps } from 'next/app'
import { CartProvider } from "../context/ShoppingCart";

export default function App({ Component, pageProps } : AppProps) {
  return (
    <>
      <Head>
        <title key="title">Drink App</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,700"
        />
      </Head>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}
