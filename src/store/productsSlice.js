import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
  name: 'products',
  initialState: {
    filter: 'All',
    cart: [],
    isCartOpen: false,
    spice: 0,
    noNuts: false,
    vegetarian: false,
    totalSum: 0,
    totalQuantity: 0
  },
  reducers: {
    setfilter: (state, {payload}) => {
      state.filter = payload;
    },
    addToCart: (state, {payload}) => {
      const newItem = payload;
      const existingItem = state.cart.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        const payloadItem = {
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        }
        state.cart = [...state.cart, payloadItem]
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalSum = state.cart.reduce((total, item) => total + Number(item.price) * Number(item.quantity),0);
    },
    removeItem(state, {payload}) {
      const id = payload;
      const existingItem = state.cart.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      state.totalSum = state.cart.reduce((total, item) => total + Number(item.price) * Number(item.quantity),0);
    },
    deleteItem(state, {payload}) {
      const id = payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        state.cart = state.cart.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      state.totalSum = state.cart.reduce((total, item) => total + Number(item.price) * Number(item.quantity),0);
    },
    openCart: (state, {payload}) => {
      state.isCartOpen = payload;
    },
    setSpice: (state, {payload}) => {
      state.spice = payload;
    },
    setNuts: (state, {payload}) => {
      state.noNuts = payload;
    },
    setVegetarian: (state, {payload}) => {
      state.vegetarian = payload;
    }
  }
})

export const { setfilter, openCart, addToCart, deleteItem, removeItem ,setSpice, setNuts, setVegetarian, setTotal } = productsSlice.actions;

export default productsSlice.reducer;