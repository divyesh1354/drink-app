// import React from "react";

import type { Init } from "./ShoppingCart";

const cartReducer = (state: Init, action) => {
  switch (action.type) {
    case "REMOVE_PRODUCT": {
      // const newCart = state.cart.filter((x) => x.id !== action.payload);
      state.cart = [];
      const newCart = state.cart;
      const newTotalItems = newCart.length;
      const newTotalAmount = newCart.reduce((acc, currentProduct) => {
        return acc + currentProduct.price * currentProduct.quantity;
      }, 0);
      return {
        ...state,
        cart: newCart,
        totalItems: newTotalItems,
        totalAmount: newTotalAmount,
      };
    }
    case "ADD_PRODUCT": {
      const newCart = [...state.cart];
      const productID = action.payload.id;
      const productQty = action.payload.quantity;
      const isExist = newCart.findIndex((element) => element.id === productID);
      if (isExist !== -1) {
        newCart[isExist].quantity += productQty;
      } else {
        newCart.push(action.payload);
      }
      const newTotalItems = newCart.length;
      let newTotalAmount = newCart.reduce((acc, currentProduct) => {
        return acc + currentProduct.price * currentProduct.quantity;
      }, 0);

      let interest = 0;
      if (newTotalItems == 2) {
        interest = newTotalAmount * 5 / 100;
      } else if (newTotalItems == 3) {
        interest = newTotalAmount * 10 / 100;
      } else if (newTotalItems == 4) {
        interest = newTotalAmount * 20 / 100;
      } else if (newTotalItems == 5) {
        interest = newTotalAmount * 25 / 100;
      }
      newTotalAmount = newTotalAmount - interest;

      return {
        ...state,
        cart: newCart,
        totalItems: newTotalItems,
        totalAmount: newTotalAmount,
        bounce: true,
      };
    }
    case "BOUNCE_END":
      return {
        ...state,
        bounce: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
