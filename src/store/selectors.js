import { createSelector } from "@reduxjs/toolkit";


export const getCart = createSelector(
  state => state.products,
  products => products.cart
);

export const getCartOpenStatus = createSelector(
  state => state.products,
  products => products.isCartOpen
)

export const getCartSum = createSelector(
  state => state.products,
  products => products.totalSum
)

export const getCartTotalItems = createSelector(
  state => state.products,
  products => products.totalQuantity
)

export const getCategory = createSelector(
  state => state.products,
  products => products.filter
);

export const getSpice = createSelector(
  state => state.products,
  products => products.spice
)

export const getNuts = createSelector(
  state => state.products,
  products => products.noNuts
)

export const getVegetarian = createSelector(
  state => state.products,
  products => products.vegetarian
)
