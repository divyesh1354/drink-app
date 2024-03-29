import React, { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

type Product = {
  price: number;
  image: string;
  name: string;
  quantity: number;
};

export type ProductWeb = Product & { id: string };

export type ProductLocal = Product & { id: number };

export interface Init {
  cart: ProductLocal[];
  totalItems: number;
  totalAmount: number;
  bounce: boolean;
  removeProduct?: () => void;
  addProduct?: (selectedProducts: ProductLocal) => void;
  bouceEnd?: () => void;
}

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  bounce: false,
};

export const CartContext = createContext<Init>(initialState);
export const CartProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const removeProduct = () => {
    dispatch({
      type: "REMOVE_PRODUCT",
    });
  };

  const addProduct = (selectedProducts: Product) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: selectedProducts,
    });
  };

  const bouceEnd = () => {
    dispatch({
      type: "BOUNCE_END",
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        totalItems: state.totalItems,
        totalAmount: state.totalAmount,
        bounce: state.bounce,
        removeProduct,
        addProduct,
        bouceEnd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
