import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0, wish: [], cart: [] };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToWish(state, action) {
      if (!state.wish.some((item) => item.id === action.payload.id)) {
        state.wish.push(action.payload);
      }
    },
    deleteFromWish(state, action) {
      const index = state.wish.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.wish.splice(index, 1);
      }
    },
    addToCartWish(state, action) {
      if (!state.cart.some((item) => item.id === action.payload.id)) {
        state.cart.push(action.payload);
      }
      const index = state.wish.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.wish.splice(index, 1);
      }
    },
    addToCart(state, action) {
      if (!state.cart.some((item) => item.id === action.payload.id)) {
        state.cart.push(action.payload);
      }
    },
    deleteFromCart(state, action) {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    quantityCart(state, action) {
      const { id, price } = action.payload;
      const index = state.cart.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.cart[index].price = price;
      }
    },
  },
});

export const {
  addToWish,
  deleteFromWish,
  addToCartWish,
  addToCart,
  deleteFromCart,
  quantityCart,
} = counterSlice.actions;
export default counterSlice.reducer;
