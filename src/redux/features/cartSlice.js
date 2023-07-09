import { createSlice } from "@reduxjs/toolkit";

let items = localStorage.getItem("cartItems");
let percentageOff = 0.10;

const initialState = {
  cartItems: items 
  ? JSON.parse(items) 
  : [],
  totalItems: items 
  ? JSON.parse(items).reduce((acc, cur) => cur.units + acc, 0) 
  : 0,
  totalPrice: items 
  ? JSON.parse(items).reduce((acc, cur) => cur.price * cur.units + acc, 0).toFixed(2)
  : 0,
  discount: items && JSON.parse(items).reduce((acc, cur) => cur.price * cur.units + acc, 0) > 50
  ? percentageOff
  : 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const existingItem = state.cartItems.find((item) => action.payload.id == item.id);
      if (existingItem) {
        state.cartItems.map((item) => {
          if (item.id == action.payload.id) {
            item.units++;
          }
        });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        action.payload.units = 1;
        state.cartItems.push({ ...action.payload });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
      state.totalItems = state.cartItems.reduce((acc, cur) => {
        return cur.units + acc
      }, 0);
      state.totalPrice = state.cartItems.reduce((acc, cur) => {
        return cur.price * cur.units + acc
      }, 0).toFixed(2);
      state.discount = state.cartItems.reduce((acc, cur) => {
        return cur.price * cur.units + acc
      }, 0) > 50 ? percentageOff : 0;
    },

    remove: (state, action) => {
      const existingItem = state.cartItems.find((i) => action.payload.id == i.id);
      if (existingItem?.units > 1) {
        state.cartItems.map((item) => {
          if (item.id == action.payload.id) {
            item.units--;
          }
        });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        const deleted = state.cartItems.filter((item) => item.id !== action.payload.id);
        localStorage.setItem("cartItems", JSON.stringify(deleted));
        state.cartItems = deleted
      }
      state.totalItems = state.cartItems.reduce((acc, cur) => {
        return cur.units + acc
      }, 0);
      state.totalPrice = state.cartItems.reduce((acc, cur) => {
        return cur.price * cur.units + acc
      }, 0).toFixed(2);
      state.discount = state.cartItems.reduce((acc, cur) => {
        return cur.price * cur.units + acc
      }, 0) > 50 ? percentageOff : 0;
    },

    reset: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      state.cartItems = []
      state.totalItems = 0
      state.totalPrice = 0
    },
  },
});

export const { add, remove, reset } = cartSlice.actions;
export default cartSlice.reducer;
