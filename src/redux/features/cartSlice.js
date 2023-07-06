import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    add: (state, action) => {
      const existingItem = state.find((item) => action.payload.id == item.id);
      if (existingItem) {
        state.map((item) => {
          if (item.id == action.payload.id) {
            item.units++;
          }
        });
        localStorage.setItem("cartItems", JSON.stringify(state));
      } else {
        action.payload.units = 1;
        state.push({ ...action.payload });
        localStorage.setItem("cartItems", JSON.stringify(state));
      }
    },

    remove: (state, action) => {
      const existingItem = state.find((i) => action.payload.id == i.id);
      if (existingItem?.units > 1) {
        state.map((item) => {
          if (item.id == action.payload.id) {
            item.units--;
          }
        });
        localStorage.setItem("cartItems", JSON.stringify(state));
      } else {
        const deleted = state.filter((item) => item.id !== action.payload.id);
        localStorage.setItem("cartItems", JSON.stringify(deleted));
        return deleted;
      }
    },

    reset: (state, action) => {
      state = []
      localStorage.setItem("cartItems", JSON.stringify(state));
      return state;
    },
  },
});

export const { add, remove, reset } = cartSlice.actions;
export default cartSlice.reducer;
